import { Text, View } from "@tarojs/components";
// import { useState } from 'react';

import { CartOutlined, ChatOutlined, ShopOutlined } from "@taroify/icons";
import { ActionBar } from "@taroify/commerce";
import "./index.less";

function BasicActionBar1() {
  return (
    <ActionBar>
      <ActionBar.IconButton>
        <ChatOutlined />
        <Text>客服</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton>
        <CartOutlined />
        <Text>购物车</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton>
        <ShopOutlined />
        <Text>店铺</Text>
      </ActionBar.IconButton>
      <ActionBar.Button>立即购买</ActionBar.Button>
    </ActionBar>
  );
}
export default function Index() {
  return (
    <View className="page-body">
      <View className="page-section">分类内容</View>
      <BasicActionBar1></BasicActionBar1>
    </View>
  );
}
