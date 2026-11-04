# Building Schedule 実装監査

監査対象： [building-schedule](https://github.com/mhinata2010-wq/building-schedule) の `main`（2026-11-04時点）。READMEによる機能宣言と実際のコードの存在を分け、実機動作は別に確認する。

| ユーザーの課題 | 確認した実装・根拠 | 暫定判断 |
| --- | --- | --- |
| 工程表を直感的に作成・編集したい | [app.js](https://github.com/mhinata2010-wq/building-schedule/blob/main/app.js), [sketch-network.js](https://github.com/mhinata2010-wq/building-schedule/blob/main/sketch-network.js)：ドラッグ作成、移動、伸縮 | 実装あり・E2E未検証 |
| 変更後に後続工程をずらしたい | [schedule-dependencies.js](https://github.com/mhinata2010-wq/building-schedule/blob/main/schedule-dependencies.js)：依存関係の探索と確認ダイアログ。完了済み工程は伝播停止 | 実装あり・E2E未検証 |
| 工程表のズーム・横移動 | [app.js](https://github.com/mhinata2010-wq/building-schedule/blob/main/app.js)：日/週/月、ミニマップで横移動 | 実装あり・E2E未検証 |
| 工程表を印刷する | [field-workspace.js](https://github.com/mhinata2010-wq/building-schedule/blob/main/field-workspace.js)：ブラウザ印刷、CSV出力 | 一部対応。A4/A3の実機品質未確認 |
| Excelから移行・二重入力をなくす | 同ファイル：CSV出力、JSONエクスポート/インポート | 一部対応。Excel/CSVインポート未実装 |
| 複数人で同じ工程を編集する | [README](https://github.com/mhinata2010-wq/building-schedule/blob/main/README.md)：LocalStorage保存 | 未実装。認証・DB・リアルタイム共同編集が必要 |
| 工程変更を職人へ通知し確認証跡を残す | 通知・既読・共有の基盤なし | 未実装 |
| 写真・図面・日報を工程と紐づける | 工程情報中心のPrototype | 未実装 |
| 電波の弱い現場で安全に同期する | 通信状態のUIと端末内保存はある | 一部対応。復帰時の同期・競合解決がない |
| 大規模現場で快適に動く | ブラウザ性能の実測なし | 未検証 |

## 解決可否を評価する手順
`機能がコードにある` だけで「解決済み」としない。E2E合格、実ユーザーのタスク成功率、ミス率、所要時間の計測が必要。

## 特に危険な未実装
- **同期と権限**：LocalStorage中心では現場監督・協力会社・施主が同じ最新版を安全に共有できない。
- **変更確認**：工程を動かせても関係者への伝達と受領確認が保証されない。
- **既存データ移行**：CSVの書き出しだけではExcel中心運用から切り替わらない。
- **紙運用への適合**：印刷ボタンの存在と現場で読める工程表の品質は別。
