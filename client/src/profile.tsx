import Sidebar from "./sidebar";
import "./profile.css";
import { useEffect, useState } from "react";
import Joi from "joi";

export default function Profile() {
  const [recordStatus, setRecordStatus] = useState("edit");
  const [recordStatus2, setRecordStatus2] = useState("edit");
  const [recordStatus3, setRecordStatus3] = useState("edit");
  const [recordStatus4, setRecordStatus4] = useState("edit");
  const [data, setData] = useState({
    fileLocation: "Let's start uploading your resume",
    circleName: "John",
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "33389892343",
    years: "7",
    country: "Albania",
    remoteYears: "0",
    english: "Average",
    work: "Part Time",
    linkedin: "https://www.linkedin.com/in/harsh-srivastava-65649a17a/",
    github: "https://github.com/Srivastava57Harsh",
  });

  const schema = Joi.object({
    email: Joi.string().pattern(
      new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ),
    phone: Joi.number().integer().required(),
  });

  const handleUpdate = async () => {
    try {
      await schema.validateAsync({
        email: data.email,
        phone: data.phone,
      });
      window.localStorage.setItem("data", JSON.stringify(data));
    } catch (err) {
      alert("Invalid input. Kindly check your email or phone number. ");
    }
  };

  useEffect(() => {
    if (
      window.localStorage.getItem("data") === null ||
      window.localStorage.getItem("data") === undefined
    ) {
      handleUpdate();
    } else {
      const dataItems = JSON.parse(window.localStorage.getItem("data")!);
      console.log(dataItems);
      setData(dataItems);
    }
  }, []);

  return (
    <div className="gridContainer">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="form">
        <div className="uploadResume">
          <label className="uploadLabel">
            <img src="./resume.png" className="icons" />
            <p className="text">
              Upload your <br /> resume
            </p>
          </label>
          <div className="uploadButtoncontainer">
            <label className="uploadButton" title="Upload">
              <input
                type="file"
                name="uploadfile"
                id="img"
                className="uploadButtoninput"
                disabled={recordStatus === "edit"}
                onChange={(e) => {
                  console.info(e.target.value);
                  setData({ ...data, fileLocation: e.target.value });
                }}
              />
              {
                data.fileLocation.split("\\")[
                  data.fileLocation.split("\\").length - 1
                ]
              }
            </label>
            <img
              src={recordStatus === "tick" ? "/tick.svg" : "/edit.png"}
              onClick={async () => {
                if (recordStatus === "tick") {
                  setRecordStatus("edit");
                } else {
                  setRecordStatus("tick");
                }
                handleUpdate();
              }}
              className="icons2"
            />
          </div>
        </div>

        <div className="details">
          <div className="nameCountry">
            <div className="nameLabel">
              <label className="nameCircle">{data.circleName}</label>
              <div>
                <input
                  value={data.name}
                  id="nameInputId"
                  className="nameText"
                  onChange={async (event) => {
                    setData({ ...data, name: event.target.value });
                  }}
                  placeholder="John Doe"
                  readOnly={recordStatus2 === "edit"}
                ></input>
                <input
                  value={data.country}
                  className="countryText"
                  placeholder="Albania"
                  readOnly={recordStatus2 === "edit"}
                  onChange={(event) => {
                    setData({ ...data, country: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="nameEdit">
              <img
                src={recordStatus2 === "tick" ? "/tick.svg" : "/edit.png"}
                onClick={() => {
                  if (recordStatus2 === "tick") {
                    setRecordStatus2("edit");

                    setData({
                      ...data,
                      circleName: data.name.substring(0, 4),
                    });
                  } else {
                    setRecordStatus2("tick");
                  }

                  handleUpdate();
                }}
                className="icons2"
              />
            </div>
          </div>
          <div className="moreInfo">
            <img src="./mail.png" className="icons3" />
            <input
              value={data.email}
              className="emailInput"
              placeholder="Email"
              readOnly={recordStatus2 === "edit"}
              onChange={(event) => {
                console.log(event.target.value);
                setData({ ...data, email: event.target.value });
              }}
            ></input>
            <img src="./phone.png" className="icons3" />
            <p className="plusSymbol">+</p>
            <input
              value={data.phone}
              type="tel"
              className="emailInput"
              placeholder="Phone"
              readOnly={recordStatus2 === "edit"}
              onChange={async (event) => {
                setData({ ...data, phone: event.target.value });
              }}
            ></input>
            <img
              src="./linkedin.png"
              className="icons4"
              title={data.linkedin}
              onClick={() => {
                if (recordStatus2 === "tick") {
                  const linkedin = prompt(
                    "Please enter your Linkedin link:",
                    data.linkedin
                  );
                  setData({ ...data, linkedin: `${linkedin}` });
                }
              }}
            />
            <img
              src="./github.png"
              className="icons5"
              title={data.github}
              onClick={() => {
                if (recordStatus2 === "tick") {
                  const github = prompt(
                    "Please enter your Github link:",
                    data.github
                  );
                  setData({ ...data, github: `${github}` });
                }
              }}
            />
          </div>
        </div>

        <div className="experience">
          <label className="experienceLabel">
            <img src="./experience.png" className="icons6" />
            <p className="text">Overall experience</p>
          </label>
          <div className="experienceEditcontainer">
            <div className="years">
              <input
                value={data.years}
                className="yearInput"
                placeholder="7"
                readOnly={recordStatus3 === "edit"}
                onChange={(event) => {
                  setData({ ...data, years: event.target.value });
                }}
              ></input>{" "}
              years /{" "}
              <input
                value={data.remoteYears}
                className="yearInput"
                placeholder="0"
                readOnly={recordStatus3 === "edit"}
                onChange={(event) => {
                  setData({ ...data, remoteYears: event.target.value });
                }}
              ></input>
              remote years
              <br />
              <select
                // value={data.english}
                className="englishInput"
                disabled={recordStatus3 === "edit"}
                onChange={(event) => {
                  setData({ ...data, english: event.target.value });
                }}
              >
                <option value={data.english} className="chosenOption">
                  {data.english}
                </option>
                <option value="Professional">Professional</option>
                <option value="Poor">Poor</option>
                <option value="Average">Average</option>
              </select>{" "}
              English proficiency
            </div>
            <img
              src={recordStatus3 === "tick" ? "/tick.svg" : "/edit.png"}
              onClick={async () => {
                if (recordStatus3 === "tick") {
                  setRecordStatus3("edit");
                } else {
                  setRecordStatus3("tick");
                }
                handleUpdate();
              }}
              className="icons2"
            />
          </div>
        </div>

        <div className="availability">
          <label className="experienceLabel">
            <img src="./availability.png" className="icons6" />
            <p className="text3">Availabilty</p>
          </label>
          <div className="availabilitycontainer">
            <div className="years">
              <select
                // value={data.work}
                className="availabiltyInput"
                disabled={recordStatus4 === "edit"}
                onChange={(event) => {
                  setData({ ...data, work: event.target.value });
                }}
              >
                <option value={data.work} className="chosenOption">
                  {data.work}
                </option>
                <option value="Part Time">Part Time</option>
                <option value="Full Time">Full Time</option>
              </select>
            </div>
            <img
              src={recordStatus4 === "tick" ? "/tick.svg" : "/edit.png"}
              onClick={async () => {
                if (recordStatus4 === "tick") {
                  setRecordStatus4("edit");
                } else {
                  setRecordStatus4("tick");
                }
                handleUpdate();
              }}
              className="icons2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
