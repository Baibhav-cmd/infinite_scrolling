import { useEffect, useState } from "react";
import PP from "./PP";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  useEffect(() => {
    const getdata = async () => {
      const apidata = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=5`
      );
      const realdata = await apidata.json();
      setData((prev) => [...prev, ...realdata]);
      // console.log(realdata);
    };
    getdata();
  }, [page]);
  return <PP data={data} setpage={setpage} />;
};

export default InfiniteScroll;
