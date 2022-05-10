import { useParams } from "react-router-dom";
export default function HelloWorld() {
    let params = useParams()
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>{params.world}</h2>
      </main>
    );
  }