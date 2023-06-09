// import axiosClient from './axiosClient';
// import axios from 'axios';

export const fetchEvents = async () => {
  try {
    const mock = [
      {
        id: '61697b11c0cb54d45f7c8dcb',
        name: '周杰倫 2023 熱情演唱會',
        cover_img_url: '/images/61697b11c0cb54d45f7c8dcb_cover.jpg',
        content:
          '周杰倫熱情演唱會將於2023年夏季在台北舉辦，這場演唱會將會有周杰倫最新的歌曲，以及經典的老歌，讓粉絲們享受一個熱情洋溢的夜晚。',
        notice:
          '1. 本場演唱會場地將會有嚴格的安檢措施，請攜帶身份證件進場。\n2. 禁止攜帶食物、酒精、寵物進場，會場內亦不得吸菸。\n3. 請提前到場，以免影響到您的入場體驗。',
        status: 1,
        location: '台北小巨蛋',
        address: '台北市南港區研究院路三段2號',
        seat_big_img_url: '/images/61697b11c0cb54d45f7c8dcb_seat_big.png',
        seat_small_img_url: '/images/61697b11c0cb54d45f7c8dcb_seat_small.png',
        firm_user_id: '644e4370fc13ae30a8842e35',
        created_at: '2022-10-15T12:30:00.000Z',
        updated_at: '2022-10-15T12:30:00.000Z',
        deleted_at: null,
      },
      {
        id: '61697b11c0cb54d45f7c8dcf',
        name: '五月天 2023 Just Rock It 天空之城演唱會',
        cover_img_url: '/images/61697b11c0cb54d45f7c8dcf_cover.jpg',
        content:
          '五月天天空之城演唱會即將開唱！這場演唱會將會有五月天最新的歌曲，以及經典的老歌，讓歌迷們享受一個充滿音樂的夜晚。',
        notice:
          '1. 請勿攜帶食物、酒精、寵物進場，會場內亦不得吸菸。\n2. 請勿攜帶照相機、攝影機等器材進場，以免影響到其他觀眾的欣賞體驗。\n3. 請在指定時間內入場，逾時將無法入場。',
        status: 1,
        location: '高雄市義大世界戶外音樂劇場',
        address: '高雄市大社區義大路1號',
        seat_big_img_url: '/images/61697b11c0cb54d45f7c8dcf_seat_big.png',
        seat_small_img_url: '/images/61697b11c0cb54d45f7c8dcf_seat_small.png',
        firm_user_id: '644e4370fc13ae30a8842e39',
        created_at: '2023-04-30T15:00:00.000Z',
        updated_at: '2023-04-30T15:00:00.000Z',
        deleted_at: null,
      },
      {
        id: '61697b11c0cb54d45f7c8dd0',
        name: '林宥嘉 2023 動次打次演唱會',
        cover_img_url: '/images/61697b11c0cb54d45f7c8dd0_cover.jpg',
        content:
          '林宥嘉動次打次演唱會即將舉行！這場演唱會將會有林宥嘉最新的歌曲，以及經典的老歌，讓歌迷們一同享受一個充滿音樂的夜晚。',
        notice:
          '1. 活動當天禁止攜帶食物、酒精、寵物進場，會場內亦不得吸菸。\n2. 請勿攜帶照相機、攝影機等器材進場，以免影響到其他觀眾的欣賞體驗。\n3. 未滿 12 歲之兒童，應由家長陪同進場。',
        status: 1,
        location: '台北小巨蛋',
        address: '台北市松山區南京東路四段2號',
        seat_big_img_url: '/images/61697b11c0cb54d45f7c8dd0_seat_big.png',
        seat_small_img_url: '/images/61697b11c0cb54d45f7c8dd0_seat_small.png',
        firm_user_id: '644e4370fc13ae30a8842e3b',
        created_at: '2023-04-30T15:00:00.000Z',
        updated_at: '2023-04-30T15:00:00.000Z',
        deleted_at: null,
      },
      {
        id: '61697b11c0cb54d45f7c8dd2',
        name: '蔡依林 2023 Ugly Beauty 世界巡迴演唱會 [高雄站]',
        cover_img_url: '/images/61697b11c0cb54d45f7c8dd2_cover.jpg',
        content:
          '蔡依林 Ugly Beauty 世界巡迴演唱會即將舉行！這場演唱會將會有蔡依林最新的歌曲，以及經典的老歌，讓歌迷們一同享受一個充滿音樂的夜晚。',
        notice:
          '1. 活動當天禁止攜帶食物、酒精、寵物進場，會場內亦不得吸菸。\n2. 請勿攜帶照相機、攝影機等器材進場，以免影響到其他觀眾的欣賞體驗。\n3. 未滿 12 歲之兒童，應由家長陪同進場。',
        status: 1,
        location: '高雄巨蛋',
        address: '高雄市左營區博愛二路777號',
        seat_big_img_url: '/images/61697b11c0cb54d45f7c8dd2_seat_big.png',
        seat_small_img_url: '/images/61697b11c0cb54d45f7c8dd2_seat_small.png',
        firm_user_id: '644e4370fc13ae30a8842e3d',
        created_at: '2023-04-30T15:00:00.000Z',
        updated_at: '2023-04-30T15:00:00.000Z',
        deleted_at: null,
      },
    ];

    return { mock };
  } catch (error) {
    return { redirect: { destination: '/' } };
  }
};
