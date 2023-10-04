import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

const AtticModel = (props) => {


  useEffect(() => {
    props.setIsModalOpen(true);
    // props.setIsModalOpen1(false);

  }, []);

  const showModal = () => {
    props.setIsModalOpen(true);
    // props.setIsModalOpen1(false);

  };

  const handleOk = () => {
    props.setIsModalOpen(false);
    // props.setIsModalOpen1(false);

    // navigate("/attic")
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
    // props.setIsModalOpen1(false);

 
    // navigate("/attic")

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
        open={props.isModalOpen}
        // open={props.isModalOpen1}


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

export default AtticModel;
