import { View } from '@tarojs/components';
import { useState } from 'react';
import {Toast,Search,Swiper,Image } from '@taroify/core'
import './index.less'
import  goods01 from '../../assets/images/goods01.jpg'
import  goods02 from '../../assets/images/goods02.jpg'
import  goods03 from '../../assets/images/goods03.jpg'
import  goods04 from '../../assets/images/goods04.jpg'

function SearchWithEvents() {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)

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
  )
}
function ImageSwiper() {

  return (
    <Swiper className='basic-swiper' autoplay={4000}>
      <Swiper.Indicator />
      <Swiper.Item><Image className='image'  src={goods01} /></Swiper.Item>
      <Swiper.Item><Image className='image'  src={goods02} /></Swiper.Item>
      <Swiper.Item><Image className='image'  src={goods03} /></Swiper.Item>
      <Swiper.Item><Image className='image'  src={goods04} /></Swiper.Item>
    </Swiper>
  )
}
export default function Index() {


  return (
    <View className='page-body'>
      <View className='page-section'>
        <View className='top_input'> <SearchWithEvents ></SearchWithEvents></View>
        <View className='swiper'><ImageSwiper></ImageSwiper></View>

      </View>

    </View>
  );
}
