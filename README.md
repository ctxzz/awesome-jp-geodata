# awesome-jp-geodata

日本の地理空間データエクスプローラー - 日本の多様な地理空間データソースをまとめたインタラクティブなWebサイト

## 🌐 Live Demo

このサイトはGitHub Pagesでホストされています。

## 📁 ファイル構成

- `index.html` - メインHTMLページ（構造とスタイリング）
- `data.json` - 地理空間データソース情報（21件）
- `app.js` - JavaScriptアプリケーションロジック（フィルタリングとカード表示）

## ✨ 機能

- **インタラクティブフィルター**: カテゴリ（人流・人口、不動産・建物、地図・基盤）と費用（無料、有料）で絞り込み
- **レスポンシブデザイン**: デスクトップ、タブレット、モバイルに対応
- **カードベースUI**: 各データソースを見やすいカードで表示
- **外部リンク**: 各データソースの公式サイトへ直接アクセス可能

## 🚀 ローカルでの実行方法

```bash
# リポジトリをクローン
git clone https://github.com/ctxzz/awesome-jp-geodata.git
cd awesome-jp-geodata

# 簡易HTTPサーバーを起動
python3 -m http.server 8080

# ブラウザで http://localhost:8080 を開く
```

## 📊 データソース

21件の日本の地理空間データソースを収録:

### カテゴリA: 人流・人口
- モバイル空間統計（NTTドコモ）
- KDDI Location Analyzer
- Agoop
- unerry
- クロスロケーションズ
- e-Stat
- RESAS
- 国土数値情報（パーソントリップ調査）

### カテゴリB: 不動産・建物
- ゼンリン
- 東京カンテイ
- gBizINFO
- 不動産情報ライブラリ
- Project PLATEAU
- 固定資産税路線価・相続税路線価
- 登記所備付地図データ

### カテゴリC: 地図・基盤
- e-Govデータポータル
- G空間情報センター
- 国土地理院
- jSTAT MAP
- OpenStreetMap (OSM)
- 国土数値情報

## 🛠️ 技術スタック

- **HTML5**: セマンティックマークアップ
- **Tailwind CSS**: レスポンシブスタイリング
- **JavaScript (ES6+)**: フィルタリングとDOM操作
- **Chart.js**: データ可視化用（将来の拡張用）
- **Google Fonts**: Inter & Noto Sans JP

## 📝 ライセンス

このプロジェクトはオープンソースです。