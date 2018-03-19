
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
      اتصال شما به VOA خصوصی، امن و ناشناس است
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

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
        ین پخش کننده چند رسانه ای VOA است. هنگامی که شما یک داستان را انتخاب می کنید که دارای صوتی یا تصویری همراه است، آن را در اینجا بازی می کند. شما همیشه می توانید داستان اصلی را مشاهده کنید و یا داستان های جدید را بدون متوقف کردن صدا یا ویدئو با کشیدن بر روی این صفحه، پیدا کنید. باز کردن این صفحه دوباره با کشیدن از دکمه چند رسانه ای دور در پایین صفحه. با ضربه زدن به دکمه چند رسانه ای، صوتی یا تصویری را شروع و متوقف کنید.
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
