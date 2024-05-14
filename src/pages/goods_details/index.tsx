import { Text, View, Button } from "@tarojs/components";
import {
  Cell,
  Image,
  Popup,
  Swiper,
  Tag,
  TextEllipsis,
  Form,
  Stepper,
} from "@taroify/core";

import { fetchGood } from "@/services/good/fetchGood";
// import { ActionBar } from "@taroify/commerce";
import { CSSProperties, useEffect, useState } from "react";

import { CartOutlined, HomeOutlined, ShareOutlined } from "@taroify/icons";
import { useRouter } from "@tarojs/taro";
import ActionBar from "@taroify/commerce/action-bar";
// import { ActionBar } from "@taroify/commerce";
import style from "./index.module.less";

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
  const tagstyle: CSSProperties = {
    backgroundColor: "#cbc1c1",
    color: "#000000",
    height: "50%",
    width: "80px",
    margin: "10px",

    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <View className={style.pop_content}>
      <View className={style.pop_top}>
        <View className={style.pop_img}>
          <Image
            style={{ width: "8rem", height: "8rem", margin: "0 0 0 20px" }}
            mode="scaleToFill"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </View>
        <View className={style.pop_right_value}>
          <View className={style.poptitle}>
            这是一段最多显示两行的文字，多余的内容会被省略
          </View>
          <View className={style.popprice}>￥298</View>
          <View className={style.popselect}>选择</View>
        </View>
      </View>
      <View className={style.pop_form}>
        <View className={style.popcolor}>
          <View className={style.goodstag}>颜色</View>
          <View className={style.tagitem}>
            <Tag color="default" size="medium" style={tagstyle}>
              米色荷叶边
            </Tag>
          </View>
        </View>
        <View className={style.popsize}>
          <View className={style.goodstag}>尺码</View>
          <View className={style.tagitem}>
            <Tag color="default" size="medium" style={tagstyle}>
              S
            </Tag>
            <Tag color="default" size="medium" style={tagstyle}>
              M
            </Tag>
            <Tag color="default" size="medium" style={tagstyle}>
              L
            </Tag>
          </View>
        </View>
        <View className={style.popnum}>
          <View className={style.popnum_limit}>
            <Text
              style={{
                height: "50%",
                width: "50%",
                padding: "15px 5px ",

                fontSize: "medium",
              }}
            >
              购买数量
            </Text>
            <Text
              style={{
                height: "50%",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "smaller",

                color: "#9a9595",
              }}
            >
              (限购5件)
            </Text>
          </View>
          <View className={style.popnumvalue}>
            <Form.Item name="stepper" className={style.stepper}>
              <Form.Control>
                <Stepper />
              </Form.Control>
            </Form.Item>
          </View>
        </View>
        <View className={style.popupbottom}>
          <Button className={style.popbutton}>加入购物车</Button>
          <Button className={style.popbutton}>立即购买</Button>
        </View>
      </View>
    </View>
  );
}

function Popupstase({ showPopup, setShowPopup }) {
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

function BasicActionBar({ showPopup, setShowPopup }) {
  const toggle = () => {
    console.log(showPopup);
    setShowPopup(true);
    console.log(showPopup);
  };
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
          onClick={() => {
            toggle();
          }}
        >
          加入购物车
        </ActionBar.Button>
        <ActionBar.Button
          style={{ background: "#f5d207" }}
          className={style.right_item}
          shape="round"
          onClick={() => toggle()}
        >
          立即购买
        </ActionBar.Button>
      </ActionBar.ButtonGroup>
    </ActionBar>
  );
}
//
export default function Index() {
  const [showPopup, setShowPopup] = useState(false);
  const [gooddetail, setgoods] = useState([]);

  const tagstyle = {
    backgroundColor: "#ffe1e1",
    color: "#ad0000",
  };
  const router = useRouter();
  const productId = router.params.id;
  console.log("id:", productId);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await fetchGood(Number(productId));
        if (isMounted) {
          // 处理返回的商品列表数据
          console.log("res:", res);
          setgoods(res);
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
  console.log("details:", gooddetail);
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
        <Popupstase
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        ></Popupstase>
      </View>
      <View className={style.comments}></View>
      <View className={style.goods_details}></View>

      <View className={style.bottom}>
        <BasicActionBar showPopup={showPopup} setShowPopup={setShowPopup} />
      </View>
    </View>
  );
}
