import { Text, View } from "@tarojs/components";
import { Cell, Image, Popup, Swiper, Tag, TextEllipsis } from "@taroify/core";
import { useState } from "react";
import { ActionBar } from "@taroify/commerce";
import { CartOutlined, HomeOutlined, ShareOutlined } from "@taroify/icons";
import style from "./index.module.less"; // 导入样式文件

function SwiperWithCustomIndicator() {
  const [value, setValue] = useState(0);
  const images = [
    "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png",
    "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a1.png",
    "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b.png",
    "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b1.png",
  ];

  const listItems = images.map((item, index) => (
    <Swiper.Item key={index}>
      <Image className={style.image} src={item} />
    </Swiper.Item>
  ));

  return (
    <Swiper autoplay={4000} onChange={setValue}>
      {listItems}
      <Swiper.Indicator className={style.custom_indicator}>
        {value + 1}/4
      </Swiper.Indicator>
    </Swiper>
  );
}

function ValueSelect() {
  return (
    <View className={style.pop_content}>
      <View className={style.pop_top}>
        <View className={style.pop_img}>
          <Image
            style={{ width: "9rem", height: "9rem" }}
            mode="scaleToFill"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </View>
        <View className={style.pop_right_value}>21</View>
      </View>
      <View className={style.pop_form}></View>
    </View>
  );
}

function Popupstase() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <View className={style.popup}>
      <View className={style.poptext} onClick={() => setShowPopup(true)}>
        <Cell
          title="已选  请选择"
          isLink
          bordered={false}
          className={style.poptext}
          style={{ lineHeight: "5px", padding: "10px" }}
        />
      </View>
      <Popup
        open={showPopup}
        rounded
        placement="bottom"
        style={{ height: "60%" }}
        onClose={() => setShowPopup(false)}
        className={style.popup_popup}
      >
        <View className={style.popup_content}>
          <ValueSelect></ValueSelect>
        </View>
        <Popup.Backdrop
          onClick={() => setShowPopup(false)}
          open={showPopup}
          style={{ background: "rgba(0,0,0,0.5)" }}
        ></Popup.Backdrop>
        <Popup.Close placement="top-right"></Popup.Close>
      </Popup>
    </View>
  );
}

function BasicActionBar() {
  return (
    <ActionBar className={style.actionbar}>
      <ActionBar.IconButton className={style.actionitem}>
        <HomeOutlined
          className={style.action_icon}
          size={30}
          style={{ top: 10 }}
        />
        <Text className={style.action_text}>首页</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton className={style.actionitem}>
        <CartOutlined
          className={style.action_icon}
          size={30}
          style={{ top: 10 }}
        />
        <Text className={style.action_text}>购物车</Text>
      </ActionBar.IconButton>
      <ActionBar.ButtonGroup flex={250} className={style.action_right}>
        <ActionBar.Button
          style={{ background: "#e11414" }}
          className={style.right_item}
        >
          加入购物车
        </ActionBar.Button>
        <ActionBar.Button
          style={{ background: "#f5d207" }}
          className={style.right_item}
          shape="round"
        >
          立即购买
        </ActionBar.Button>
      </ActionBar.ButtonGroup>
    </ActionBar>
  );
}
//
export default function Index() {
  const tagstyle = {
    backgroundColor: "#ffe1e1",
    color: "#ad0000",
  };
  return (
    <View className={style.page_body}>
      <View className={style.img_swiper}>
        <SwiperWithCustomIndicator></SwiperWithCustomIndicator>
      </View>
      <View className={style.price_box}>
        <View className={style.price}>
          <View className={style.price_left}>
            <Text className={style.now_p}>￥298</Text>{" "}
            <Text className={style.pre_p}>￥400</Text>
          </View>
          <View className={style.price_right}>
            <Text className={style.yishou}>已售1024</Text>
          </View>
        </View>
        <View className={style.redeem}>
          <View className={style.tag_left}>
            <Tag style={tagstyle}>满减</Tag>
            <Tag style={tagstyle}>满减</Tag>
            <Tag style={tagstyle}>满减</Tag>
            <Tag style={tagstyle}>满减</Tag>
          </View>
          <View className={style.tag_right}>
            <Cell isLink>领券</Cell>
          </View>
        </View>
        <View className={style.good_title}>
          <View className={style.title}>
            <TextEllipsis content="慢慢来，不要急，生活给你出了难题" />
          </View>
          <View className={style.share}>
            <View className={style.btn_icon}>
              <ShareOutlined />
            </View>
            <View className={style.btn_text}> 分享</View>
          </View>
        </View>
      </View>
      <View className={style.size_select}>
        <Popupstase></Popupstase>
      </View>
      <View className={style.comments}></View>
      <View className={style.goods_details}></View>

      <View className={style.bottom}>
        <BasicActionBar></BasicActionBar>
      </View>
    </View>
  );
}
