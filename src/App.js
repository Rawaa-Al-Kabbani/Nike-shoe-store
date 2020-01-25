import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import  Item from './components/Item';
import {Row, Col, Layout} from 'antd';

class App extends Component {
  render() {
    const { Header, Content } = Layout;
    return (
      <BrowserRouter>
      <div className="App">
      <Layout>
       <header>
        <Navbar />
       <div className="container-background">
          <img src="https://s3.amazonaws.com/nikeinc/assets/22330/Look_Book_Image_3_hd_1600.jpg?1376613669" alt="Not Available" />
        </div>
        </header>
      <Content className="container-content">
      <div className="flex">
      <Row type="flex" justify="space-between" >
      <Col className="flex-col" span={12}><Item src={"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5d100100-1089-48e6-9213-fdc2e6b902e5/air-zoom-superrep-hiit-class-shoe-nNFNMP.jpg"} kind={"Women's HIT Class Shoe"} title={"Nike Air Zoom SuperRep"} price={'1 299 kr'}/></Col>
      <Col className="flex-col" span={12}><Item src={'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/adkdtystnmd81zukr8sz/sb-check-solarsoft-skate-shoe-J5jxXh.jpg'} kind={"Women's Skate Shoe"} title={'Nike SB Check Solarsoft'} price={'629 kr'}/></Col>
      <Col className="flex-col" span={12}><Item src={'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/w9zuyrbiikvcqjq6yjby/odyssey-react-shield-2-running-shoe-s5LK0l.jpg'} kind={"Women's Running Shoe"} title={'Nike Odyssey React Shield 2'} price={'1 499 kr'}/></Col>
      <Col className="flex-col" style ={{paddingTop:"35px"}} span={12}><Item src={'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lixign9aonmspgjdrqmj/custom-nike-joyride-run-flyknit-by-you.jpg'} kind={"Custom Women's Running"} title={'Nike Joyride Run'} price={'2 149 kr'}/>  </Col>
      </Row>
      </div>
      </Content>
     </Layout>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
