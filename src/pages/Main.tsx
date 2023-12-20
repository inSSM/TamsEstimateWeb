import React from 'react';
import Banner from '../components/banner/Banner';
import List from '../components/banner/List';
import Content from '../components/banner/Content';

export default function Main(){
    return (
        <div className="h-screen w-screen font-black">
            <Banner title="카플래너" iconPath='/images/main/carIcon.png'></Banner>
            <Content title="슬라이스 배너 #1" content="텍스트 입력"></Content>
            <List title="원하는 브랜드를 선택해주세요"></List>
            <Content title="슬라이스 배너 #2" content="텍스트 입력"></Content>
        </div>
    )

}