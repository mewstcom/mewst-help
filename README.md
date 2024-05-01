# mewst-help

## セットアップ

```
git clone git@github.com:mewstcom/mewst-help.git
cd mewst-help
docker compose up
docker compose exec app yarn
docker compose exec app yarn start -h 0.0.0.0
```

http://localhost:3303/ にアクセスするとページが表示されるはずです。

## デプロイ

`prod` ブランチにマージするとデプロイされます。

https://github.com/mewstcom/mewst-help/compare/prod...main
