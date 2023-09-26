import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Container.css";
function Container() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.VITE_SERVER}/all`)
      .then((res) => setData(() => res.data));
  }, []);
  console.log(data);
  return (
    <>
      {data &&
        data.map((el) => (
          <Card mt={4} key={el.poem_text}>
            <span className="authorName">{el.author}</span>
            <CardBody fontStyle="italic">{el.poem_text}</CardBody>
          </Card>
        ))}
    </>
  );
}

export default Container;
