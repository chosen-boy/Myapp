// @ts-ignore
import { getGoodsDetailsCommentsCount } from "@/model/detailsComments";
/** 获取商品详情页评论数 */
function mockFetchGoodDetailsCommentsCount(spuId = 0) {
  const { delay } = require("../_utils/delay");

  return delay().then(() => getGoodsDetailsCommentsCount(spuId));
}

/** 获取商品详情页评论数 */
export function getGoodsDetailsCommentsCount(spuId = 0) {
  return mockFetchGoodDetailsCommentsCount(spuId);
}

/** 获取商品详情页评论 */
function mockFetchGoodDetailsCommentList(spuId = 0) {
  const { delay } = require("../_utils/delay");
  const { getGoodsDetailsComments } = require("../../model/detailsComments");
  return delay().then(() => getGoodsDetailsComments(spuId));
}

/** 获取商品详情页评论 */
export function getGoodsDetailsCommentList(spuId = 0) {
  return mockFetchGoodDetailsCommentList(spuId);
}
