import { View } from "@tarojs/components";
import { useState } from "react";
import { Image, Search, Swiper, Toast } from "@taroify/core";
import "./index.less";
import imageitem from "../../model/swiper";
import Tbs from "../../compoent/tbs";

function SearchWithEvents() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Toast open={open} onClose={() => setOpen(false)}>
        取消
      </Toast>
      <Search
        value={value}
        placeholder='请输入搜索关键词'
        action
        onChange={(e) => setValue(e.detail.value)}
        onCancel={() => setOpen(true)}
      />
    </>
  );
}

function ImageSwiper() {
  const listItems = imageitem.map((item) => (
    <Swiper.Item>
      <Image className='image' src={item.src} key={item.id} />
    </Swiper.Item>
  ));

  return (
    <Swiper className='basic-swiper' lazyRender autoplay={4000}>
      <Swiper.Indicator />
      {listItems}
    </Swiper>
  );
}

export default function Index() {
  return (
    <View className='page-body'>
      <View className='page-section'>
        <View className='top_input'>
          {" "}
          <SearchWithEvents></SearchWithEvents>
        </View>

        <View className='swiper'>
          <ImageSwiper></ImageSwiper>
        </View>
        <View className='Tbs'>
          <Tbs></Tbs>
        </View>
      </View>
    </View>
  );
}
