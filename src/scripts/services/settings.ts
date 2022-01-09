import Cookies from 'js-cookie'
import { notify } from '@kyvg/vue3-notification'

import i18n from '@/config/i18n'
import axios from '@/config/axios'
import { User, ResearchInterest } from '@/types/user'

export const changeDesc = async (user: User): Promise<void> => {
  try {
    await axios.put(`/users/${user?.Login}/desc`, {
      token: Cookies.get('jwt'),
      description: user.description,
    })
    notify({
      type: 'success',
      title: i18n.global.t('notifications.types.succes'),
      text: i18n.global.t('notifications.text.user.description.done'),
    })
  } catch (e) {
    notify({
      type: 'error',
      title: i18n.global.t('notifications.types.error'),
      text: i18n.global.t('notifications.text.user.description.didnt'),
    })
  }
}

export const changeInterests = async (user: User): Promise<void> => {
  const levels: { [key: string]: number } = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4,
    master: 5,
    visionary: 6,
  }
  try {
    await axios.put(`/users/${user?.Login}/interests`, {
      token: Cookies.get('jwt'),
      interests: user.researchInterests?.sort(
        (a: ResearchInterest, b: ResearchInterest) =>
          levels[b.level as string] - levels[a.level as string]
      ),
    })
    notify({
      type: 'success',
      title: i18n.global.t('notifications.types.succes'),
      text: i18n.global.t('notifications.text.user.interests.done'),
    })
  } catch (e) {
    notify({
      type: 'error',
      title: i18n.global.t('notifications.types.error'),
      text: i18n.global.t('notifications.text.user.interests.didnt'),
    })
  }
}

export const changeEducation = async (user: User): Promise<void> => {
  try {
    await axios.put(`/users/${user?.Login}/education`, {
      token: Cookies.get('jwt'),
      interests: user.education,
    })
    notify({
      type: 'success',
      title: i18n.global.t('notifications.types.succes'),
      text: i18n.global.t('notifications.text.user.education.done'),
    })
  } catch (e) {
    notify({
      type: 'error',
      title: i18n.global.t('notifications.types.error'),
      text: i18n.global.t('notifications.text.user.education.didnt'),
    })
  }
}
