import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function Form() {
  const navigate = useNavigate()
  const [state, setState] = useState(0);
  const [nameTitle, setNameTitle] = useState("นาย");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [distinct, setDistinct] = useState("");
  const [subDistinct, setSubDistinct] = useState("");
  const [phone, setPhone] = useState("");
  // const []

  const back = () => {
    navigate("/")
  }
  const next = () => {
    try {
      if (nameTitle == "" || nameTitle == null || nameTitle == undefined) {
        throw new Error("กรอกข้อมูลให้ถูกต้อง");
      } else if (
        firstName == "" ||
        firstName == null ||
        firstName == undefined
      ) {
        throw new Error("กรอกข้อมูลให้ถูกต้อง");
      } else if (lastName == "" || lastName == null || lastName == undefined) {
        throw new Error("กรอกข้อมูลให้ถูกต้อง");
      } else if (idNumber == "" || idNumber == null || idNumber == undefined) {
        throw new Error("กรอกข้อมูลให้ถูกต้อง");
      } else if (dob == "" || dob == null || dob == undefined) {
        throw new Error("กรอกข้อมูลให้ถูกต้อง");
      } else if (address == "" || address == null || address == undefined) {
        throw new Error("กรอกข้อมูลให้ถูกต้อง");
      } else if (province == "" || province == null || province == undefined) {
        throw new Error("กรอกข้อมูลให้ถูกต้อง");
      } else if (distinct == "" || distinct == null || distinct == undefined) {
        throw new Error("กรอกข้อมูลให้ถูกต้อง");
      } else if (
        subDistinct == "" ||
        subDistinct == null ||
        subDistinct == undefined
      ) {
        throw new Error("กรอกข้อมูลให้ถูกต้อง");
      } else if (phone == "" || phone == null || phone == undefined) {
        throw new Error("กรอกข้อมูลให้ถูกต้อง");
      } else {
        setState(1);
      }
    } catch (err) {
      alert(err);
    }
  };
  function handleFirstName(event) {
    setFirstName(event.target.value);
  }
  function handleLastName(event) {
    setLastName(event.target.value);
  }
  function handleIdent(event) {
    setIdNumber(event.target.value);
  }
  function handleDate(event) {
    setDOB(event.target.value);
  }
  function handleAddress(event) {
    setAddress(event.target.value);
  }
  function handleProvince(event) {
    setProvince(event.target.value);
  }
  function handleDistinct(event) {
    setDistinct(event.target.value);
  }
  function handleSubDistinct(event) {
    setSubDistinct(event.target.value);
  }
  function handleTel(event) {
    setPhone(event.target.value);
  }

  const submit = async () => {
    console.log("sub")
    try {
      let obj = {
        title: nameTitle,
        firstname: firstName,
        lastname: lastName,
        identity: idNumber,
        dob: dob,
        address: address,
        province: province,
        distinct: distinct,
        subdistinct: subDistinct,
        tel: phone,
      };
      const result = await axios.post("http://localhost:3001/user/create", 
        obj,
      );
      alert("คุณสมัครเรียบร้อยแล้ว")
      navigate("/") 
    } catch (err) {
      alert("failed");
    }
  };
  return (
    <center style={{ display: "flex", justifyContent: "center" }}>
      {state == 1 && (
        <div style={{textAlign: "left", fontSize: 20}}>
          <h1 style={{color: "red"}}>ยืนยันการสมัคร</h1>
          <div>คำนำหน้า : {nameTitle}</div>
          <div>ชื่อ : {firstName}</div>
          <div>นามสกุล : {lastName}</div>
          <div>เลขบัตรประจำตัวประชาชน : {idNumber}</div>
          <div>วันเกิด : {dob}</div>
          <div>ที่อยู่ : {address}</div>
          <div>จังหวัด : {province}</div>
          <div>เขต/อำเภอ : {distinct}</div>
          <div>แขวง/ตำบล : {subDistinct}</div>
          <div>เบอร์ : {phone}</div>
          <button style={{width: 100, height: 50, fontSize: 20, backgroundColor: "white", color: "#FF6622", borderRadius: 10, borderWidth: 0,  cursor: "pointer"}} onClick={() => setState(0)}>ย้อนกลับ</button>
          <button style={{width: 100, height: 50, fontSize: 20, backgroundColor: "#FF6622", color: "white", borderRadius: 10, borderWidth: 0,  cursor: "pointer"}} onClick={() => submit()}>ยืนยัน</button>
        </div>
      )}
      {state == 0 && (
        <div>
          <h1 style={{color: "red"}}>ลงทะเบียนรับสิทธิ์</h1>
          <h2 style={{color: "red", textAlign: "left"}}>ศูนย์ฉีดวัคซีนกลางบางซื่อ</h2>
          <h2 style={{color: "black", textAlign: "left"}}>อายุ 12 - 18 ปี</h2>

          <div
            style={{
              display: "flex",
              fontSize: 30,
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            ข้อมูลทั่วไป
          </div>
          <div style={{ display: "flex" }}>
            <span style={{margin: 4}}>
              <div style={{textAlign: "left"}}>
                <label>คำนำหน้า</label>
              </div>
              <div>
                <select name="title" id="cars" style={{ width: 300, height: 40, fontSize: 15 }}>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                </select>
              </div>
            </span>
            <span style={{margin: 4}}>
              <div style={{textAlign: "left"}}>
                <label>ชื่อ</label>
              </div>
              <div>
                <input
                  type="text"
                  style={{ width: 300, height: 40, fontSize: 15  }}
                  onChange={handleFirstName}
                />
              </div>
            </span>
            <span style={{margin: 4}}>
              <div style={{textAlign: "left"}}>
                <label>นามสกุล</label>
              </div>
              <div>
                <input
                  type="text"
                  style={{ width: 300, height: 40, fontSize: 15  }}
                  onChange={handleLastName}
                />
              </div>
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{margin: 4}}>
              <div style={{textAlign: "left"}}>
                <label>เลขบัตรประจำตัวประชาชน</label>
              </div>
              <div>
                <input
                  type="text"
                  style={{ width: 300, height: 40, fontSize: 15  }}
                  onChange={handleIdent}
                />
              </div>
            </span>
            <span style={{margin: 4}}>
              <div style={{textAlign: "left"}}>
                <label>วัน</label>
              </div>
              <div>
                <input
                  type="date"
                  style={{ width: 300, height: 40, fontSize: 15  }}
                  onChange={handleDate}
                />
              </div>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            ที่อยู่
          </div>

          <div style={{ display: "flex" }}>
            <span style={{margin: 4}}>
              <div style={{textAlign: "left"}}>
                <label>รายละเอียดที่อยู่</label>
              </div>
              <div>
                <input
                  type="text"
                  style={{ width: 300, height: 40, fontSize: 15  }}
                  onChange={handleAddress}
                />
              </div>
            </span>
            <span style={{margin: 4}}>
              <div style={{textAlign: "left"}}>
                <label>จังหวัด</label>
              </div>
              <div>
                <input
                  type="text"
                  style={{ width: 300, height: 40, fontSize: 15  }}
                  onChange={handleProvince}
                />
              </div>
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{margin: 4}}>
              <div style={{textAlign: "left"}}>
                <label>เขต</label>
              </div>
              <div>
                <input
                  type="text"
                  style={{ width: 300, height: 40, fontSize: 15  }}
                  onChange={handleDistinct}
                />
              </div>
            </span>
            <span style={{margin: 4}}>
              <div style={{textAlign: "left"}}>
                <label>แขวง</label>
              </div>
              <div>
                <input
                  type="text"
                  style={{ width: 300, height: 40, fontSize: 15  }}
                  onChange={handleSubDistinct}
                />
              </div>
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{margin: 4}}>
              <div style={{textAlign: "left"}}>
                <label>หมายเลขโทรศัพท์</label>
              </div>
              <div>
                <input
                  type="text"
                  style={{ width: 300, height: 40, fontSize: 15  }}
                  onChange={handleTel}
                />
              </div>
            </span>
          </div>
          <button onClick={() => back()} style={{width: 100, height: 50, fontSize: 20, backgroundColor: "white", color: "#FF6622", borderRadius: 10, borderWidth: 0,  cursor: "pointer"}}>ย้อนกลับ</button>
          <button onClick={() => next()} style={{width: 100, height: 50, fontSize: 20, backgroundColor: "#FF6622", color: "white", borderRadius: 10, borderWidth: 0,  cursor: "pointer"}}>ถัดไป</button>
        </div>
      )}
    </center>
  );
}
