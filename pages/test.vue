<template>
  <b-container>
    <b-jumbotron header-level="4">
      <template v-slot:header>確認画面</template>
      <template v-slot:lead>
        以下表示内容を確認の上、画面下部の送信ボタンを押下ください
      </template>
    </b-jumbotron>
    <b-row>
      <b-col>
        <b-card title="名前">
          <b-card-text>
            山田 太郎
          </b-card-text>
        </b-card>
        <b-card title="マイナンバー">
          <b-card-text>
            1111-2222-3333
          </b-card-text>
        </b-card>
        <b-card title="生年月日">
          <b-card-text>
            1993年8月25日
          </b-card-text>
        </b-card>
        <b-card title="性別">
          <b-card-text>
            男
          </b-card-text>
        </b-card>
        <b-card title="住所">
          <b-card-text>
            東京都江東区豊洲3丁目3番地-3 豊洲センタービル28階
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        class="mx-auto"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
        switch
        size="lg"
      >
        内容を確認しました。
      </b-form-checkbox>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <b-button class="mx-auto d-block jfont" variant="primary" size="lg">
            送信
          </b-button>
        </div>
      </b-col>
      <b-col class="align-items-center">
        <b-button class="mx-auto d-block" variant="secondary" size="lg">
          戻る
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: {},
}
</script>

<style>
.jfont {
  font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
    'Hiragino Sans', Meiryo, sans-serif;
}
</style>
