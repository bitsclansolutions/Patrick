import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

const FirstFloorModel = (props) => {
  useEffect(() => {
    props.setIsModalOpen2(true);
  }, []);

  const showModal = () => {
    props.setIsModalOpen2(true);
  };

  const handleOk = () => {
    props.setIsModalOpen2(false);
    // navigate("/ground-floor")
  };

  const handleCancel = () => {
    props.setIsModalOpen2(false);
    // navigate("/ground-floor")

  };

  

  return (
    <>
      <Button type="primary" onClick={showModal}>
        

        
      </Button>
      <Modal
      cancelButtonProps={{ style: { display: 'none' } }}
      closable={false}
      maskClosable={false}
        title="User Task"
        open={props.isModalOpen2}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Okay"
        bodyStyle={{
          backgroundColor: "#CC664A",
          color: "white",
          overflowY: 'clip',
          height: "20vh",
        }}
        style={{
          marginTop:'10%'
        }}
      >
        <div className="resultFormat">
        {/* Terms & Conditions */}
        </div>
        <div style={{fontSize:'21px'}}>
        Somewhere in the house a fuse has been switched off.
 Solve this problem as you have been taught.
          <br />
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
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
          sapiente? */}
          <br />
        </div>
      </Modal>
    </>
  );
};

export default FirstFloorModel;
