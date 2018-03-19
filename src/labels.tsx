
import * as React from 'react'

export const graphqlLanguage = 'fa'

export const momentLocale = 'fa'

export const articleLabels = {
  updatedOn: (date: string) => `Updated on ${date}`,
  relatedContent: 'مطالب مرتبط',
}

export const breakingNewsLabels = {
  header: 'خبر فوری',
  noNews: 'اکنون خبر شکستن وجود ندارد',
}

export const editorsChoiceLabels = {
  header: 'انتخاب سردبیر',
}

export const categorySettingsLabels = {
  header: 'مدیریت موضوعات',
  myCategories: 'موضوعات من',
  allCategories: 'همه موضوع‌ها',
  dragAndDrop: 'لطفا موضوع‌تان را به اینجا بکشید',
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
  header: 'موردعلاقه',
  removeAll: 'Remove All',
}

export const homeLabels = {
  headlines: 'سرخط خبرها',
  search: 'جستجو',
  manage: '+',
}

export const introLabels = {
  heading: 'Welcome to VoA!',
  content: 'به صدای آمریکا خوش آمدید',
  continue: 'Continue',
}

export const liveStreamLabels = {
  header: 'پخش زنده ',
  notifyMe: 'پخش زنده خبر',
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
  header: 'تنظیم‌های ویدپو',
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'گزینه پخش دوباره',
}

export const notificationSettingsLabels = {
  header: 'تنظیم‌های آگاه‌سازی',
  dailyToggle: 'یادآوری روزانه',
}

export const programsScreenLabels = {
  videos: 'ویدئوی انتخابی',
  audio: 'برنامه شنیداری',
  all: 'All',
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
  panic: 'این اپ را حذف کن',
}

export const textSettingsLabels = {
  header: 'تنظیم‌های متن',
  chooseSize: 'تنظیم اندازه فونت',
  normalSize: 'کوچک',
  largeSize: 'متوسط',
  hugeSize: 'بزرگ',
}
