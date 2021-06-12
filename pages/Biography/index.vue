<template>
  <div class="bio-container container">
    <h4 class="page-title">Biography</h4>
    <BioSection
      title="Yoshii Shunichi"
      description="神戸の大学に通っています。<br>2020年の6月に容疑者画像メーカーというiOSアプリを公開して以降、精力的に趣味の悪いアプリやwebサイトを作成しています。<br>アプリの感想など、Twitterで連絡いただけると元気になります。"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Biography',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ganja_tuberのプロフィールです。',
        },
      ],
    }
  },
}
</script>
