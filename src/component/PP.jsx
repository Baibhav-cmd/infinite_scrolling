import { useEffect } from "react";

const PP = ({ data, setpage }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      console.log(param);
      if (param[0].isIntersecting) {
        setpage((prev) => prev + 1);
      }
    });
    const lastitem = document.querySelectorAll(".author:last-child");

    const last = lastitem[lastitem.length - 1];
    console.log(last);
    if (!last) {
      return;
    }
    observer.observe(last);
  }, [data]);

  return (
    <>
      {data.map((item, id) => (
        <div key={id} className="card">
          <h2>{item.id}</h2>
          <img
            className="image-post"
            src={item.download_url}
            height="180px"
            width="300px"
          />
          <h4 className="author">Author:{item.author}</h4>
        </div>
      ))}
    </>
  );
};
export default PP;
