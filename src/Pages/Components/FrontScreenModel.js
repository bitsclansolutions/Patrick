import { Button, Modal } from "antd";
import React, { useState, useEffect } from "react";

const FrontScreenModel = (props) => {
  useEffect(() => {
    props.setIsModalOpen(true);
  }, []);

  const showModal = () => {
    props.setIsModalOpen(true);
  };

  const handleOk = () => {
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  

  return (
    <>
      <Button type="primary" 
      onClick={showModal}
      >
        
      </Button>
      <Modal
        title="User Info"
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="I Agree"
        bodyStyle={{
          backgroundColor: "#CC664A",
          color: "white",
          overflow: "scroll",
          height: "50vh",
        }}
      >
        <div className="resultFormat">
        Terms & Conditions
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam modi
          dolorum illo ab? Modi, laudantium. Aut, aperiam vel consectetur libero
          aspernatur assumenda. Fuga, quos cumque nostrum ratione repellendus
          quas perspiciatis et dolorem ullam numquam dolorum. Hic sint qui, id,
          beatae blanditiis deleniti voluptate soluta explicabo autem, veniam
          eveniet perspiciatis aliquam sapiente. Delectus qui facere doloremque
          iure incidunt, nihil, odio debitis fugit error cumque, nulla
          cupiditate voluptatem ipsa eligendi eum placeat. Veniam, hic libero.
          Pariatur aliquam dicta iste alias deleniti sunt eaque numquam
          voluptatum iusto commodi soluta possimus, nemo iure hic officiis sequi
          assumenda! Velit, nam cum eveniet magnam exercitationem distinctio.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          iure soluta deserunt impedit itaque at ab consequatur assumenda sunt,
          sit maiores modi expedita laudantium molestiae officia dolorum aliquid
          obcaecati similique?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quis asperiores repellat perspiciatis quisquam quam esse est natus
          voluptate. Sequi cupiditate nemo doloremque vitae molestiae? Vitae
          reiciendis iure vero officia!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus
          quae, vel ipsa quia labore fugiat libero. Suscipit ea commodi ipsam
          temporibus porro accusantium corrupti veritatis mollitia, ex facere
          sapiente?
          <br />
        </div>
      </Modal>
    </>
  );
};

export default FrontScreenModel;
