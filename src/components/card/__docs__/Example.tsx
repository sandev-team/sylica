import React from "react";
import Card from "../Card"; // Adjust the path as needed

const Example = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <Card
        title="Card Example"
        content={
          <div>
            <p>
              This is an example card with content and an action button in the
              footer.
            </p>
          </div>
        }
        footer={
          <button
            style={{
              backgroundColor: "#ed8822",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Action
          </button>
        }
      />
    </div>
  );
};

export default Example;
