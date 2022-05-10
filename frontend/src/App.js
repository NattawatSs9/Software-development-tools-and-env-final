import "./App.css";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export default function App() {
  const navigate = useNavigate()

  const go = () => {
    navigate('/vaccine/registration')
  }
  return (
    <div>
      <img
        src="https://vaccine.trueid.net/static/media/banner.af9b098f.jpg"
        style={{
          width: "100%",
        }}
      />
      <center>
        <h1 style={{color: "#EE2210"}}> ทรูเปิดลงทะเบียนรับการฉีดวัคซีนโควิค - 19 เข็ม 3 </h1>
      </center>
      <center>
        <div
          style={{
            display: "flex",
            marginLeft: 400,
            marginRight: 400,
          }}
        >
          <div
            style={{
              flex: "50%",
            }}
          >
            <div style={{textAlign: "left", width: 200, fontSize: 20, fontWeight: "bold"}}> กระตุ้นเข็มที่ 3 </div>
            <br />
            <div style={{textAlign: "left", width: 200, fontSize: 12}}>
              สำหรับคนไทยและต่างชาติ อายุ 18 ปีขึ้นไป
              ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 3 ด้วยวัคซีนไฟเซอร์
            </div>
            <div style={{textAlign: "left", width: 200, fontSize: 15, fontWeight: "bolder"}}>
              โดยได้รับเข็มที่ 2 มาแล้วอย่างน้อย 90 วัน เริ่มฉีด 1 - 31 พ.ค. 65
              
            </div>
            <div style={{textAlign: "left", width: 200, fontSize: 12, fontWeight: "bolder"}}>
            ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ (สถานีกลางบางซื่อ ประตู 2
              โดยเข้าทาง ถ.กำแพงเพชร)
              </div>
          </div>
          <div
            style={{
              flex: "50%",
            }}
          >
            <br />
            <button style={{width: 200, height: 40, backgroundColor: "#EE2241", color: "white", fontWeight: "bold", borderWidth: 0, borderRadius: 10, cursor: "pointer"}} onClick={()=> go()}> ลงทะเบียนฉีดวัคซีนเข็มที่ 3 </button>
          </div>
        </div>
      </center>
    </div>
  );
}
