// import { useState } from 'react';

import { Grid, Image, Tabs, Tag } from "@taroify/core";
import { Text, View } from "@tarojs/components";
import { CartOutlined } from "@taroify/icons";
import { fetchGoodsList } from "@/services/good/fetchGoods";
import Taro from "@tarojs/taro";
import "./index.less";

function navto() {
  Taro.navigateTo({ url: "/pages/goods_details/index" });
}

export default function Index() {
  let isMounted = true;
  fetchGoodsList()
    .then((response) => {
      if (isMounted) {
        // 处理返回的商品列表数据
        console.log(response);
      }
    })
    .catch((error) => {
      if (isMounted) {
        // 处理请求错误
        console.error(error);
      }
    });

  return (
    <Tabs animated swipeable>
      <Tabs.TabPane title="精选推荐">
        <Grid className="grid" columns={2}>
          <Grid.Item className="grid-item" onClick={navto}>
            <View className="imgwarp">
              <Image
                className="grid-image"
                src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png"
              />
            </View>

            <View className="taroify-ellipsis--l2 imgtext">
              这是一段最多显示一行的文字，多余的内容会被省略
            </View>
            <View className="tag">
              <Tag color="danger" shape="rounded" variant="outlined">
                限时抢购
              </Tag>
            </View>
            <View className="price_box">
              <View className="price">
                <Text className="now_p">￥298</Text>{" "}
                <Text className="pre_p">￥400</Text>
              </View>
              <View className="cart_icon">
                <CartOutlined
                  style={{ color: "#ff5252" }}
                  size="40px"
                ></CartOutlined>
              </View>
            </View>
          </Grid.Item>
          <Grid.Item className="grid-item" onClick={navto}>
            <View className="imgwarp">
              <Image
                className="grid-image"
                src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png"
              />
            </View>

            <View className="taroify-ellipsis--l2 imgtext">
              这是一段最多显示一行的文字，多余的内容会被省略
            </View>
            <View className="tag">
              <Tag color="danger" shape="rounded" variant="outlined">
                限时抢购
              </Tag>
            </View>
            <View className="price_box">
              <View className="price">
                <Text className="now_p">￥298</Text>{" "}
                <Text className="pre_p">￥400</Text>
              </View>
              <View className="cart_icon">
                <CartOutlined
                  style={{ color: "#ff5252" }}
                  size="40px"
                ></CartOutlined>
              </View>
            </View>
          </Grid.Item>
          <Grid.Item className="grid-item" onClick={navto}>
            <View className="imgwarp">
              <Image
                className="grid-image"
                src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png"
              />
            </View>

            <View className="taroify-ellipsis--l2 imgtext">
              这是一段最多显示一行的文字，多余的内容会被省略
            </View>
            <View className="tag">
              <Tag color="danger" shape="rounded" variant="outlined">
                限时抢购
              </Tag>
            </View>
            <View className="price_box">
              <View className="price">
                <Text className="now_p">￥298</Text>{" "}
                <Text className="pre_p">￥400</Text>
              </View>
              <View className="cart_icon">
                <CartOutlined
                  style={{ color: "#ff5252" }}
                  size="40px"
                ></CartOutlined>
              </View>
            </View>
          </Grid.Item>
          <Grid.Item className="grid-item" onClick={navto}>
            <View className="imgwarp">
              <Image
                className="grid-image"
                src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png"
              />
            </View>

            <View className="taroify-ellipsis--l2 imgtext">
              这是一段最多显示一行的文字，多余的内容会被省略
            </View>
            <View className="tag">
              <Tag color="danger" shape="rounded" variant="outlined">
                限时抢购
              </Tag>
            </View>
            <View className="price_box">
              <View className="price">
                <Text className="now_p">￥298</Text>{" "}
                <Text className="pre_p">￥400</Text>
              </View>
              <View className="cart_icon">
                <CartOutlined
                  style={{ color: "#ff5252" }}
                  size="40px"
                ></CartOutlined>
              </View>
            </View>
          </Grid.Item>
        </Grid>
      </Tabs.TabPane>
      <Tabs.TabPane title="标签 2">内容 2</Tabs.TabPane>
      <Tabs.TabPane title="标签 3">内容 3</Tabs.TabPane>
      <Tabs.TabPane title="标签 4">内容 4</Tabs.TabPane>
    </Tabs>
  );
}
