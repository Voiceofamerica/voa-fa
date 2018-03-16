
import * as React from 'react'

export const graphqlLanguage = 'zhcn'

export const momentLocale = 'zh-cn'

export const articleLabels = {
  updatedOn: (date: string) => `Updated on ${date}`,
  relatedContent: 'Related',
}

export const bottomNavLabels = {
  home: 'Home',
  editorsChoice: 'EC',
  breakingNews: 'Breaking',
  media: 'Media',
  programs: 'Programs',
  liveStream: 'Live',
  settings: 'Me',
}

export const breakingNewsLabels = {
  header: 'خبر فوری',
  noNews: 'اکنون خبر شکستن وجود ندارد',
}

export const editorsChoiceLabels = {
  header: 'انتخاب سردبیر',
}

export const categorySettingsLabels = {
  header: 'Categories',
  myCategories: 'My Categories',
  allCategories: 'All Categories',
  dragAndDrop: 'Drag and drop to reorder',
}

export const circumventionDrawerLabels = {
  content: (
    <div>
      This is where the circumvetion would be explained
    </div>
  ),
}

export const errorBoundaryLabels = {
  error: 'اشکالی ایجاد شده است',
  retry: 'دوباره تلاش کنید',
}

export const favoritesSettingsLabels = {
  header: 'Favorites',
  removeAll: 'Remove All',
}

export const homeLabels = {
  headlines: 'Headlines',
  search: 'جستجو',
  manage: '+',
}

export const introLabels = {
  heading: 'Welcome to VoA!',
  content: 'This is a newsreader',
  continue: 'Continue',
}

export const liveStreamLabels = {
  header: 'پخش زنده ',
  notifyMe: 'Notify Me',
}

const hilight: React.CSSProperties = {
  color: '#0162B1',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
        这是美国之音的<span style={hilight}>多媒体</span>播放器。 当您选择一个伴随音频或视频的故事时，它在这里播放。
      </p>
      <p>
        您可以随时查看原始故事或查找新故事，而无需通过在此页面上向下滑动来停止音频或视频。
      </p>
      <p>
        通过从屏幕底部的圆形蓝色<span style={hilight}>多媒体</span>按钮向上滑动来再次打开此屏幕。
      </p>
      <p>
        通过点击<span style={hilight}>多媒体</span>按钮启动和停止音频或视频。
      </p>
    </div>
  ),
}

export const mediaSettingsLabels = {
  header: 'Media',
  normalSpeed: 'Normal',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'Choose Speed',
}

export const notificationSettingsLabels = {
  header: 'Notifications',
  dailyToggle: 'Daily Reminder',
}

export const pullToRefreshLabels = {
  pull: 'بارگذاری مجدد',
  release: 'بارگذاری مجدد',
}

export const searchLabels = {
  header: 'جستجو برای ....',
  back: 'لغو',
  all: 'همه',
  query: 'جستجو',
  empty: 'نتیجه ای پیدا نشد',
}

export const settingsLabels = {
  header: 'تنظیمات من',
  panic: 'Reset the app',
}

export const textSettingsLabels = {
  header: 'Text Settings',
  chooseSize: 'Article Text Size',
  normalSize: '1x',
  largeSize: '1.5x',
  hugeSize: '2x',
}
