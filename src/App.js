import { useEffect, useState } from "react";

export default function App() {
  useEffect(() => {
    console.log("시작");
    return () => {
      console.log("끝");
    };
  }, []);

  const can = ["오리젠", "로얄캐닌", "뉴트리", "등등등", "등등등"];

  const [edit, setIsedit] = useState(false);
  const [count, setCount] = useState(0);

  const toggleIsEdit = () => setIsedit(!edit);
  const content = () => {
    <div>
      <img src="assets/cat.jpg" />{" "}
    </div>;
  };

  const random = can[Math.floor(Math.random() * can.length)];

  const stop = () => {
    toggleIsEdit();
    setCount(count + 1);
    if (count >= 5) {
      setCount(0);
    }
    console.log(count);
    return (
      <div className="App">
        <button onClick={stop}>눌러보라 냥😾</button>
        <div>{edit && random}</div>
        <div>{edit && content}</div>
        {content}
      </div>
    );
  };
}
