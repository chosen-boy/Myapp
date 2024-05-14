// import { useState } from 'react';
import { useEffect, useState } from "react";
import { Grid, Image, Tabs, Tag } from "@taroify/core";
import { Text, View } from "@tarojs/components";
import { CartOutlined } from "@taroify/icons";

import Taro from "@tarojs/taro";
import { fetchGoodsList } from "../../services/good/fetchGoods";

import "./index.less";

function navto(id: string) {
  Taro.navigateTo({ url: `/pages/goods_details/index?id=${id}` });
}

export default function Index() {
  const [goodslist, setgoods] = useState<
    {
      spuId: string;
      thumb: string;
      title: string;
      price: number | string;
      originPrice: number | string;
      tags: any[];
    }[]
  >([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetchGoodsList();

        if (isMounted) {
          // 处理返回的商品列表数据

          setgoods(response);
        }
      } catch (error) {
        if (isMounted) {
          // 处理请求错误
          console.error(error);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // 组件卸载时更新isMounted的值
    };
  }, []);
  console.log("goods", goodslist);

  const goodsvalue = goodslist.map((item) => (
    <Grid.Item
      className="grid-item"
      onClick={() => navto(item.spuId)}
      key={item.spuId}
    >
      <View className="imgwarp">
        <Image className="grid-image" src={item.thumb} />
      </View>

      <View className="taroify-ellipsis--l2 imgtext">{item.title}</View>
      <View className="tag">
        <Tag color="danger" shape="rounded" variant="outlined">
          限时抢购
        </Tag>
      </View>
      <View className="price_box">
        <View className="price">
          <Text className="now_p">￥{(item.price as number) / 100}</Text>
          <Text className="pre_p">￥{(item.originPrice as number) / 100}</Text>
        </View>
        <View className="cart_icon">
          <CartOutlined style={{ color: "#ff5252" }} size="40px" />
        </View>
      </View>
    </Grid.Item>
  ));

  return (
    <Tabs animated swipeable>
      <Tabs.TabPane title="精选推荐">
        <Grid className="grid" columns={2}>
          {goodsvalue}
        </Grid>
      </Tabs.TabPane>
      <Tabs.TabPane title="标签 2">内容 2</Tabs.TabPane>
      <Tabs.TabPane title="标签 3">内容 3</Tabs.TabPane>
      <Tabs.TabPane title="标签 4">内容 4</Tabs.TabPane>
    </Tabs>
  );
}
