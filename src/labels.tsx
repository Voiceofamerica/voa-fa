
import * as React from 'react'
import { push } from 'react-router-redux'
import store from 'redux-store'
import toggleCircumventionDrawer from 'redux-store/actions/toggleCircumventionDrawer'
import * as moment from 'moment'
import 'moment/locale/fa'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import { Audience } from 'helpers/graphql-types'

setAnalyticsOptions({
  language: 'farsi',
  languageService: 'voa persian',
  propertyName: 'voa persian news app',
  propertyId: '343',
  rsidAccount: 'bbgvoa.persian.streaming.app',
  reportSuite: 'bbgvoa.persian.streaming.app',
})

setDirection('rtl')

export const graphqlAudience = Audience.fa

moment.locale('fa')

export const articleLabels = {
  updatedOn: (date: string) => `${date}`,
  relatedContent: 'مطالب مرتبط',
  shareMessage: '',
  galleryLoading: 'در حال بارگذاری',
}

export const categorySettingsLabels = {
  header: 'مدیریت موضوعات',
  myCategories: 'موضوعات من',
  allCategories: 'همه موضوع‌ها',
  dragAndDrop: 'محل تنظیم موضوعات  در “خانه ” بر حسب اولویت',
  headlinesFirst: 'اول لیست سرخط‌ها',
  cancel: 'لغو',
}

export const circumventionDrawerLabels = {
  enabledContent: (
    <div>
      <p>
        تماس شما به اپلیکیشن صدای آمریکا خصوصی، امن و مخفی است.
      </p>
      <p>
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>تنظیمات</a>
      </p>
    </div>
  ),
  disabledContent: (
    <div>
      <p>
        شما در اینترنت آزاد به صدای آمریکا دسترسی دارید.
      </p>
      <p>
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>تنظیمات</a>
      </p>
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: 'انتخاب سردبیر',
}

export const errorBoundaryLabels = {
  error: 'اشکالی ایجاد شده است',
  retry: 'دوباره تلاش کنید',
}

export const favoritesSettingsLabels = {
  header: 'موردعلاقه',
  removeAll: 'حذف همه',
}

export const homeLabels = {
  headlines: 'همه خبرها',
  search: 'جستجو',
  manage: '+',
}

export const introLabels = {
  content: 'به صدای آمریکا خوش آمدید',
  continue: 'رهسپار شدن',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
        ین پخش کننده چند رسانه ای VOA است. هنگامی که شما یک داستان را انتخاب می کنید که دارای صوتی یا تصویری همراه است، آن را در اینجا بازی می کند. شما همیشه می توانید داستان اصلی را مشاهده کنید و یا داستان های جدید را بدون متوقف کردن صدا یا ویدئو با کشیدن بر روی این صفحه، پیدا کنید. باز کردن این صفحه دوباره با کشیدن از دکمه چند رسانه ای دور در پایین صفحه. با ضربه زدن به دکمه چند رسانه ای، صوتی یا تصویری را شروع و متوقف کنید.
      </p>
    </div>
  ),
  loading: 'در حال بارگذاری',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'گزینه پخش دوباره',
}

export const programsScreenLabels = {
  videos: 'ویدئوی انتخابی',
  audio: 'برنامه شنیداری',
  all: 'تلويزيون',
  live: 'در حال پخش',
  liveHeader: 'پخش زنده',
  empty: 'گزینه‌ای انتخاب نشده است',
  playAudio: 'فقط صدا',
}

export const pullToRefreshLabels = {
  pull: 'بارگذاری مجدد',
  release: 'بارگذاری مجدد',
}

export const searchLabels = {
  header: 'جستجو برای',
  back: 'لغو',
  all: 'همه',
  query: 'جستجو',
  empty: 'نتیجه ای پیدا نشد',
}

export const settingsLabels = {
  header: 'تنظیمات من',
  panic: 'این اپ را حذف کن',
  sendToFriends: 'ما را به دوستان‌تان معرفی کنید',
  sendFeedback: 'نظرتان را بگوئید',
  aboutVoa: 'صدای آمریکا (VOA) خبرها و اطلاعات درست، متعادل و جامع را برای مخاطبان در سراسر جهان منتشر می کند. صدای آمریکا کار خود را با رادیو در سال ۱۹۴۲ آغاز کرد و اکنون یک سازمان گسترده چند رسانه‌ای است. اکنون صدای آمریکا با مردم از طریق تلفن همراه و شبکه های اجتماعی با بیش از ۴۰ زبان در ارتباط است.',
  feedbackEmail: 'farsi@voanews.com',
  feedbackSubject: encodeURIComponent('صدای آمریكا'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: '',
  psiphon: 'وضعیت دسترسی بصورت امن و خصوصی است.',
  psiphonOn: 'روشن',
  psiphonOff: 'خاموش',
  takeEffectOnRestart: 'برای انجام این کار، دوباره راه اندازی کنید',
  okay: 'باشه',
}

export const textSettingsLabels = {
  textSize: 'اندازه فونت',
  normalSize: 'کوچک',
  largeSize: 'متوسط',
  hugeSize: 'بزرگ',
}
