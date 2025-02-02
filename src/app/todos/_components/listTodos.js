import React from 'react';

export const ListTodos = async () => {
  // const res = await fetch("https://v1.appbackend.io/v1/rows/t36MwwC4Am1r");
  // const data = await res.json();
  return (
    <section>
      <h1>Money Manager</h1>
      <div>
        {data.data.map((item) => (
          <div key={item._id} title={item.title} style={{ width: 300 }}>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
