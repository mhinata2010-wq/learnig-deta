# learnig-deta

建築SaaSの公開フィードバックを整理し、**[Building Schedule](https://github.com/mhinata2010-wq/building-schedule) がどの課題を解決できているか**を実装・UX・業務成果から検証するリサーチリポジトリです。

## 調査スナップショット（2026-11-04）

- 対象：**9製品**（ANDPAD / 現場Plus / ダンドリワーク / KANNA / Photoruction / BUILDYNOTE / Buildertrend / Procore / Fieldwire）
- 収録：**91件の課題シグナル**。ユニークなレビュー91投稿ではありません。
- レビュー掲載ページ：**11ソース** + 業界調査：**3ソース**
- 目標：原典を確認できるユニークレビュー **1,000投稿（未達）**
- 暫定判定：未実装43 / 一部対応34 / スコープ外8 / 実装あり・E2E未検証4 / 未検証2

> **注意**：レビュー個票のリンク、投稿日時、レビューIDは未収集のため、91件は「レビュー掲載ページに基づく論点要約」です。レビューの投稿数・母集団での問題発生率と混同しないでください。機能の存在もユーザー課題の解決を保証しません。

## ドキュメント

1. [調査の主要な発見・製品別集計](docs/key-findings.md)
2. [Building Scheduleの実装ギャップ分析](docs/implementation-audit.md)
3. [優先度付き改善ロードマップ](docs/product-roadmap.md)
4. [調査方法・エビデンスの限界・1,000レビュー収集計画](docs/research-methodology.md)
5. [出典URLレジスタ](docs/source-register.md)

## 研究データ

- [`data/feedback-signals.jsonl`](data/feedback-signals.jsonl) ：1行1課題。製品・論点・カテゴリー・優先度・現状判定・改善方針・元ページURL
- [`data/sources.json`](data/sources.json) ：レビューサイトと業界アンケートの14ソース
- [`scripts/validate-data.mjs`](scripts/validate-data.mjs) ：ID重複・件数・出典整合性などを検証

```bash
node scripts/validate-data.mjs
```

## このリポジトリで守ること

- 原文の無断大量転載はせず、要約・根拠URL・個別レビューIDで記録する。
- AI生成の架空レビューを収録しない。**レビュー件数と課題シグナル件数を区別する**。
- 実装判定の更新時は、[building-schedule](https://github.com/mhinata2010-wq/building-schedule) のコミットやテスト記録を紐づける。
- Feature Branch → PR（Summary / Changes / Testing / Notes）→ レビュー → main とする。
- 個別投稿の収集時は `platform / review_id / review_deep_link / review_published_at / captured_at` を記録し、重複排除する。

## 役割の分離

ここは調査・意思決定の**エビデンス管理**専用。アプリ開発は [building-schedule](https://github.com/mhinata2010-wq/building-schedule)、デザイン検証は [design-deta](https://github.com/mhinata2010-wq/design-deta)、GitHub運用ルールは [rules-github](https://github.com/mhinata2010-wq/rules-github) で扱います。
