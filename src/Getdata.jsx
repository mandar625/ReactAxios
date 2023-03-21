import React, { useEffect, useState } from "react";

export default function Getdata() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        // console.log(response);
        response.json().then((result) => {
          setposts(result);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <ul>
        {posts.map((pst) => {
          return (
            <>
              <li>{pst.id}</li>
              <li>{pst.title}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
