# Phase2 テスト仕様書（C1: 自動チェック結果つき）

- 入力: acf-map.yaml
- acf-map.yaml 全ページ数: 146
- テストケース数: 90（CPTは代表1件に集約。他は付録参照）

> **この文書はサイトの中身が正しいかを確認するためのものです。**
> 本番サーバへの載せ方・設定は [リリース手順書](../リリース手順書.md) を見てください。

凡例: 「自動OK/自動NG」= 機械的に判定済み／「要目視」= 人が見て判断する項目（Excel/CSVの方はL1向け l1-checklist.tsv を参照。判定列は黄=要目視・未実行（未確定）・赤=自動NGで色分け）

---

## アーバンネイチャー北九州 \| 都市と自然、近いからこそおもしろい。 (/ → front-page.php)

URL: http://nature-kitakyushuichiki.local/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 34/34 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 34件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反30件）</span> | pa11y-report.json より |

## お知らせ \| アーバンネイチャー北九州 (/news/ → archive-nkk_news.php)

URL: http://nature-kitakyushuichiki.local/news/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 20件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 「北九州ネイチャーポジティブネットワーク」で仲間がどんどん増えています！ \| お知らせ \| アーバンネイチャー北九州 (/news/20251224-2/ → single-nkk_news.php)

URL: http://nature-kitakyushuichiki.local/news/20251224-2/

※ 同じテンプレートを使う他8件（九州電力グループの活動報告 | お知らせ | アーバンネイチャー北九州、ネイチャーポジティブ実践事例に株式会社マインの事例を掲載しました | お知らせ | アーバンネイチャー北九州、ネイチャーポジティブ実践事例に株式会社ネイチャーの事例を掲載しました | お知らせ | アーバンネイチャー北九州、曽根東小学校主催により、「春の曽根干潟クリーン作戦」が開催されました。北九州ネイチャーポジティブネットワークからも３企業に参加いただきました。 | お知らせ | アーバンネイチャー北九州、【国がお墨付き】敷地内の緑地やビオトープが、環境資産に化けるかも！？ （自然共生サイトのご案内） | お知らせ | アーバンネイチャー北九州、欧州のNbSジャーナリストが北九州市を訪問 ～世界が注目する北九州市のネイチャーポジティブな取組～ | お知らせ | アーバンネイチャー北九州、アーバンネイチャー北九州のウェブサイトをリニューアルしました | お知らせ | アーバンネイチャー北九州、アーバンネイチャー北九州のサイトをリニューアルしました | お知らせ | アーバンネイチャー北九州）は本ケースの結果に準ずる

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 3/3 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 22件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反3件）</span> | pa11y-report.json より |

## 全体像 \| アーバンネイチャー北九州 (/about/ → page-about.php)

URL: http://nature-kitakyushuichiki.local/about/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 41/41 一致 / image型2件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 21件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反14件）</span> | pa11y-report.json より |

## 生物多様性とは？ \| アーバンネイチャー北九州 (/about-biodiversity/ → page-about_biodiversity.php)

URL: http://nature-kitakyushuichiki.local/about-biodiversity/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 51/51 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 21件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反4件）</span> | pa11y-report.json より |

## 北九州市の取組 \| アーバンネイチャー北九州 (/about-strategy/ → page-about_strategy.php)

URL: http://nature-kitakyushuichiki.local/about-strategy/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 63/63 一致 / image型2件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 21件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反19件）</span> | pa11y-report.json より |

## 活動拠点 \| アーバンネイチャー北九州 (/center/ → archive-nkk_center.php)

URL: http://nature-kitakyushuichiki.local/center/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | <span style="color:#c62828">自動NG</span> | 0/1 一致 / 未検出: hero_image |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 20件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反19件）</span> | pa11y-report.json より |

## 北九州市響灘ビオトープ \| アーバンネイチャー北九州 (/center/biotope/ → single-nkk_center.php)

URL: http://nature-kitakyushuichiki.local/center/biotope/

※ 同じテンプレートを使う他9件（響灘緑地グリーンパーク | アーバンネイチャー北九州、北九州市ほたる館 | アーバンネイチャー北九州、いのちのたび博物館 | アーバンネイチャー北九州、到津の森公園 | アーバンネイチャー北九州、香月・黒川ほたる館 | アーバンネイチャー北九州、水環境館 | アーバンネイチャー北九州、ソラランド平尾台 | アーバンネイチャー北九州、タカミヤ環境ミュージアム | アーバンネイチャー北九州、山田緑地 | アーバンネイチャー北九州）は本ケースの結果に準ずる

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | <span style="color:#c62828">自動NG</span> | 18/20 一致 / 未検出: map_lat, map_lng / image型2件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 23件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反8件）</span> | pa11y-report.json より |

## 北九州市の自然スポット \| アーバンネイチャー北九州 (/about/spots/ → archive-nkk_spot.php)

URL: http://nature-kitakyushuichiki.local/about/spots/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 6/6 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 20件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反4件）</span> | pa11y-report.json より |

## 合馬竹林公園 \| アーバンネイチャー北九州 (/about/spots/auma/ → single-nkk_spot.php)

URL: http://nature-kitakyushuichiki.local/about/spots/auma/

※ 同じテンプレートを使う他8件（響灘ビオトープ | アーバンネイチャー北九州、玄海国定公園（若松北海岸） | アーバンネイチャー北九州、平尾台 | アーバンネイチャー北九州、関門海峡 | アーバンネイチャー北九州、紫川 | アーバンネイチャー北九州、皿倉山 | アーバンネイチャー北九州、曽根干潟 | アーバンネイチャー北九州、山田緑地 | アーバンネイチャー北九州）は本ケースの結果に準ずる

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 23/23 一致 / image型1件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 22件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反8件）</span> | pa11y-report.json より |

## 地域との繋がり \| アーバンネイチャー北九州 (/network/ → page-network.php)

URL: http://nature-kitakyushuichiki.local/network/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 30/30 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 21件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反11件）</span> | pa11y-report.json より |

## 企業参加型プロジェクト \| アーバンネイチャー北九州 (/network-projects/ → page-network_projects.php)

URL: http://nature-kitakyushuichiki.local/network-projects/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 2/2 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 22件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反4件）</span> | pa11y-report.json より |

## 活動紹介 \| アーバンネイチャー北九州 (/network/cases/ → archive-nkk_case.php)

URL: http://nature-kitakyushuichiki.local/network/cases/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 2/2 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 20件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反4件）</span> | pa11y-report.json より |

## 九州電力株式会社 北九州支店 \| 活動紹介 \| アーバンネイチャー北九州 (/network/cases/kyushu-denryoku/ → single-nkk_case.php)

URL: http://nature-kitakyushuichiki.local/network/cases/kyushu-denryoku/

※ 同じテンプレートを使う他4件（株式会社マイン | 活動紹介 | アーバンネイチャー北九州、溝上酒造株式会社 | 活動紹介 | アーバンネイチャー北九州、株式会社ネイチャー | 活動紹介 | アーバンネイチャー北九州、日揮触媒化成株式会社 | 活動紹介 | アーバンネイチャー北九州）は本ケースの結果に準ずる

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 7/7 一致 / image型1件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 22件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反4件）</span> | pa11y-report.json より |

## 企業の活動ブログ \| アーバンネイチャー北九州 (/blog/ → page-blog.php)

URL: http://nature-kitakyushuichiki.local/blog/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | <span style="color:#c62828">自動NG</span> | 6/7 一致 / 未検出: hero_image / image型1件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 22件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反4件）</span> | pa11y-report.json より |

## 団体等の活動ブログ \| アーバンネイチャー北九州 (/blog-organization/ → page-blog_organization.php)

URL: http://nature-kitakyushuichiki.local/blog-organization/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 4/4 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 21件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反4件）</span> | pa11y-report.json より |

## イベント \| アーバンネイチャー北九州 (/events/ → archive-nkk_event.php)

URL: http://nature-kitakyushuichiki.local/events/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 2/2 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 20件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反6件）</span> | pa11y-report.json より |

## 8/29(土) 一夜限りの「夜の水族館」開館！ \| アーバンネイチャー北九州 (/events/sample/ → single-nkk_event.php)

URL: http://nature-kitakyushuichiki.local/events/sample/

※ 同じテンプレートを使う他27件（夏の企画展「世界のカブトムシ・クワガタ展～王者たちの素顔～」 | アーバンネイチャー北九州、9/25（金）みずべのゆうぐれコンサート | アーバンネイチャー北九州、「響灘の激レア生きもの大捜索」～発見！湿地の水中ヒーローズ～ | アーバンネイチャー北九州、アロマ祭りプロジェクト2026 ～香りからはじまるネイチャーポジティブ～ | アーバンネイチャー北九州、企業向け生態系保全体験プログラム ― ビオトープづくり | アーバンネイチャー北九州、バードフェスティバル in 北九州 | アーバンネイチャー北九州、希少水生植物「ガシャモク」の域外保全～ガシャモクを未来へつなぐために～ | アーバンネイチャー北九州、【最新技術が集結】Global Nature Positive Summit「NATURE TECH!」開催 | アーバンネイチャー北九州、【熊本開催】一般社団法人うみつなぎ主催 Global Nature Positive Summit 2026 サイドイベント | アーバンネイチャー北九州、平尾台 春の自然観察会 〜カルスト台地の野草を楽しむ〜 | アーバンネイチャー北九州、HIRAODAI ピクニックコンサート | アーバンネイチャー北九州、平尾台トゥクトゥクで巡る自然ツアー | アーバンネイチャー北九州、アーバンネイチャー北九州いきものクエスト（Biome）を実施します！ | アーバンネイチャー北九州、【参加企業募集】曽根干潟・朽網川の自然を守る環境保全活動に参加しませんか？ | アーバンネイチャー北九州、水環境館400万人達成記念イベント | アーバンネイチャー北九州、【参加者募集】公開勉強会「ネイチャーポジティブの地域経済での主流化と展開～九州・沖縄の役割と可能性～」を開催します | アーバンネイチャー北九州、自然との共生を企業の力に― ネイチャーポジティブ経営の可能性 | アーバンネイチャー北九州、北九州ネイチャーポジティブ経営シンポジウムを開催しました | アーバンネイチャー北九州、ペルセウス座流星群鑑賞会 | アーバンネイチャー北九州、北九州市アーバンネイチャーフォトコンテスト Season2 | アーバンネイチャー北九州、北九州市アーバンネイチャーフォトコンテストSeason3 | アーバンネイチャー北九州、平尾台シャボン玉フェスティバル | アーバンネイチャー北九州、植物標本づくり | アーバンネイチャー北九州、曽根干潟クリーンアップ大作戦 2026春 | アーバンネイチャー北九州、夏休み自然体験キャンプ ― 2泊3日で学ぶ北九州の自然 | アーバンネイチャー北九州、夜間特別開園！「山田ほたる祭り2025」開催！ | アーバンネイチャー北九州、子ども自然教室「森の生きもの探検隊」 | アーバンネイチャー北九州）は本ケースの結果に準ずる

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | <span style="color:#c62828">自動NG</span> | 0/13 一致 / 未検出: status_label, hero_tag_1, hero_tag_2, hero_tag_3, hero_title, hero_datetime, content_body_1, content_body_2, content_body_3, content_body_4, content_body_5, summary_datetime, summary_place / image型2件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反23件）</span> | pa11y-report.json より |

## みんなの写真展 \| アーバンネイチャー北九州 (/photos/ → page-photos.php)

URL: http://nature-kitakyushuichiki.local/photos/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 10/10 一致 / image型9件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 31件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## お問合せ \| アーバンネイチャー北九州 (/contact/ → page-contact.php)

URL: http://nature-kitakyushuichiki.local/contact/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 10/10 一致 |
| フォーム送信 | Contact Form 7 フォームが描画されているか | <span style="color:#c62828">自動NG</span> | wpcf7-form 未検出 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 21件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反4件）</span> | pa11y-report.json より |

## 会員募集 \| アーバンネイチャー北九州 (/join/ → page-join.php)

URL: http://nature-kitakyushuichiki.local/join/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 12/12 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 22件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反8件）</span> | pa11y-report.json より |

## プライバシーポリシー \| アーバンネイチャー北九州 (/privacy/ → page-privacy.php)

URL: http://nature-kitakyushuichiki.local/privacy/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 24/24 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 22件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反13件）</span> | pa11y-report.json より |

## 参加申し込み｜企業向け生態系保全体験プログラム ― ビオトープづくり \| アーバンネイチャー北九州 (/events-biotope-kigyo-apply/ → page-events_biotope_kigyo_apply.php)

URL: http://nature-kitakyushuichiki.local/events-biotope-kigyo-apply/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | <span style="color:#c62828">自動NG</span> | 3/4 一致 / 未検出: apply_submit_note / image型1件は自動チェック対象外（要目視） |
| フォーム送信 | Contact Form 7 フォームが描画されているか | <span style="color:#c62828">自動NG</span> | wpcf7-form 未検出 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 10件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反2件）</span> | pa11y-report.json より |

## 2025年5～6月のイベント一覧 \| アーバンネイチャー北九州 (/events-202505-06/ → page-events_202505_06.php)

URL: http://nature-kitakyushuichiki.local/events-202505-06/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 8/8 一致 / image型1件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 23件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反12件）</span> | pa11y-report.json より |

## 2025年7～8月のイベント一覧 \| アーバンネイチャー北九州 (/events-202507-08/ → page-events_202507_08.php)

URL: http://nature-kitakyushuichiki.local/events-202507-08/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 8/8 一致 / image型1件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 23件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反12件）</span> | pa11y-report.json より |

## 2025年10～11月のイベント一覧 \| アーバンネイチャー北九州 (/events-202510-11/ → page-events_202510_11.php)

URL: http://nature-kitakyushuichiki.local/events-202510-11/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 8/8 一致 / image型1件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 23件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反11件）</span> | pa11y-report.json より |

## 2026年1月のイベント一覧 \| アーバンネイチャー北九州 (/events-202601/ → page-events_202601.php)

URL: http://nature-kitakyushuichiki.local/events-202601/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 8/8 一致 / image型1件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反21件）</span> | pa11y-report.json より |

## 参加申し込み｜平尾台 春の自然観察会 \| アーバンネイチャー北九州 (/events-hiraodai-kansatsukai-apply/ → page-events_hiraodai_kansatsukai_apply.php)

URL: http://nature-kitakyushuichiki.local/events-hiraodai-kansatsukai-apply/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 3/3 一致 / image型1件は自動チェック対象外（要目視） |
| フォーム送信 | Contact Form 7 フォームが描画されているか | <span style="color:#c62828">自動NG</span> | wpcf7-form 未検出 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 10件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反2件）</span> | pa11y-report.json より |

## 参加申し込み｜曽根干潟クリーンアップ大作戦 2026春 \| アーバンネイチャー北九州 (/events-sone-higata-cleanup-apply/ → page-events_sone_higata_cleanup_apply.php)

URL: http://nature-kitakyushuichiki.local/events-sone-higata-cleanup-apply/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | <span style="color:#c62828">自動NG</span> | 3/4 一致 / 未検出: apply_submit_note / image型1件は自動チェック対象外（要目視） |
| フォーム送信 | Contact Form 7 フォームが描画されているか | <span style="color:#c62828">自動NG</span> | wpcf7-form 未検出 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 10件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反2件）</span> | pa11y-report.json より |

## 参加申し込み｜夏休み自然体験キャンプ ― 2泊3日で学ぶ北九州の自然 \| アーバンネイチャー北九州 (/events-summer-camp-apply/ → page-events_summer_camp_apply.php)

URL: http://nature-kitakyushuichiki.local/events-summer-camp-apply/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | <span style="color:#c62828">自動NG</span> | 3/4 一致 / 未検出: apply_submit_note / image型1件は自動チェック対象外（要目視） |
| フォーム送信 | Contact Form 7 フォームが描画されているか | <span style="color:#c62828">自動NG</span> | wpcf7-form 未検出 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 10件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反2件）</span> | pa11y-report.json より |

## 自然共生サイト \| アーバンネイチャー北九州 (/nature-symbiosis/ → page-nature_symbiosis.php)

URL: http://nature-kitakyushuichiki.local/nature-symbiosis/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 25/25 一致 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 22件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反8件）</span> | pa11y-report.json より |

## 響灘ビオトープ共同事業体 \| アーバンネイチャー北九州 (/network-hibikinadabiotope/ → page-network_hibikinadabiotope.php)

URL: http://nature-kitakyushuichiki.local/network-hibikinadabiotope/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 36/36 一致 / image型2件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 23件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 動物 \| アーバンネイチャー北九州 (/photos-animal/ → page-photos_animal.php)

URL: http://nature-kitakyushuichiki.local/photos-animal/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 3/3 一致 / image型2件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 25件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 動物1 \| アーバンネイチャー北九州 (/photos-animal1/ → page-photos_animal1.php)

URL: http://nature-kitakyushuichiki.local/photos-animal1/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型36件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## あさの汐風公園　桜　噴水 \| アーバンネイチャー北九州 (/photos-asano-shiokaze-kouen/ → page-photos_asano_shiokaze_kouen.php)

URL: http://nature-kitakyushuichiki.local/photos-asano-shiokaze-kouen/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型33件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 合馬の竹林 \| アーバンネイチャー北九州 (/photos-auma-no-chikurin/ → page-photos_auma_no_chikurin.php)

URL: http://nature-kitakyushuichiki.local/photos-auma-no-chikurin/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型2件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## ブロッコリー \| アーバンネイチャー北九州 (/photos-broccoli/ → page-photos_broccoli.php)

URL: http://nature-kitakyushuichiki.local/photos-broccoli/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型8件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## コンテスト作品 \| アーバンネイチャー北九州 (/photos-contest/ → page-photos_contest.php)

URL: http://nature-kitakyushuichiki.local/photos-contest/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 2/2 一致 / image型1件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 昆虫・その他 \| アーバンネイチャー北九州 (/photos-etc/ → page-photos_etc.php)

URL: http://nature-kitakyushuichiki.local/photos-etc/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 3/3 一致 / image型2件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 25件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## フダンナスイスチャード \| アーバンネイチャー北九州 (/photos-fudanna-swiss-chard/ → page-photos_fudanna_swiss_chard.php)

URL: http://nature-kitakyushuichiki.local/photos-fudanna-swiss-chard/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型13件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## グリーンパーク \| アーバンネイチャー北九州 (/photos-greenpark/ → page-photos_greenpark.php)

URL: http://nature-kitakyushuichiki.local/photos-greenpark/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型19件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 春吉の眼鏡橋 \| アーバンネイチャー北九州 (/photos-haruyoshi-no-meganebashi/ → page-photos_haruyoshi_no_meganebashi.php)

URL: http://nature-kitakyushuichiki.local/photos-haruyoshi-no-meganebashi/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型28件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## ひびき海の公園（フィッシャリーナ） \| アーバンネイチャー北九州 (/photos-hibiki-umino-kouen-fisharina/ → page-photos_hibiki_umino_kouen_fisharina.php)

URL: http://nature-kitakyushuichiki.local/photos-hibiki-umino-kouen-fisharina/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型34件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## ひびき海の公園1 \| アーバンネイチャー北九州 (/photos-hibiki-umino-kouen1/ → page-photos_hibiki_umino_kouen1.php)

URL: http://nature-kitakyushuichiki.local/photos-hibiki-umino-kouen1/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型86件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## ひびき海の公園2 \| アーバンネイチャー北九州 (/photos-hibiki-umino-kouen2/ → page-photos_hibiki_umino_kouen2.php)

URL: http://nature-kitakyushuichiki.local/photos-hibiki-umino-kouen2/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型8件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 響灘ビオトープ \| アーバンネイチャー北九州 (/photos-hibikinada-biotope/ → page-photos_hibikinada_biotope.php)

URL: http://nature-kitakyushuichiki.local/photos-hibikinada-biotope/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型13件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 平尾台1 \| アーバンネイチャー北九州 (/photos-hiraodai1/ → page-photos_hiraodai1.php)

URL: http://nature-kitakyushuichiki.local/photos-hiraodai1/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型31件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 平尾台2 \| アーバンネイチャー北九州 (/photos-hiraodai2/ → page-photos_hiraodai2.php)

URL: http://nature-kitakyushuichiki.local/photos-hiraodai2/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型9件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 関門海峡 \| アーバンネイチャー北九州 (/photos-kanmon-kaikyo/ → page-photos_kanmon_kaikyo.php)

URL: http://nature-kitakyushuichiki.local/photos-kanmon-kaikyo/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型4件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 花農丘公園　総合農事センター \| アーバンネイチャー北九州 (/photos-kanougaoka-kouen/ → page-photos_kanougaoka_kouen.php)

URL: http://nature-kitakyushuichiki.local/photos-kanougaoka-kouen/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型14件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 勝山公園　桜 \| アーバンネイチャー北九州 (/photos-katsuyama-kouen-sakura/ → page-photos_katsuyama_kouen_sakura.php)

URL: http://nature-kitakyushuichiki.local/photos-katsuyama-kouen-sakura/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型47件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## キノコなど \| アーバンネイチャー北九州 (/photos-kinoko-nado/ → page-photos_kinoko_nado.php)

URL: http://nature-kitakyushuichiki.local/photos-kinoko-nado/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型9件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 北九州モノレール \| アーバンネイチャー北九州 (/photos-kitakyushu-monorail/ → page-photos_kitakyushu_monorail.php)

URL: http://nature-kitakyushuichiki.local/photos-kitakyushu-monorail/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型12件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 北九州市立美術館 \| アーバンネイチャー北九州 (/photos-kitakyushu-museum-of-art/ → page-photos_kitakyushu_museum_of_art.php)

URL: http://nature-kitakyushuichiki.local/photos-kitakyushu-museum-of-art/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型45件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 小倉城　桜 \| アーバンネイチャー北九州 (/photos-kokura-castle-sakura/ → page-photos_kokura_castle_sakura.php)

URL: http://nature-kitakyushuichiki.local/photos-kokura-castle-sakura/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型28件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 昆虫・その他 \| アーバンネイチャー北九州 (/photos-konchu-sonota/ → page-photos_konchu_sonota.php)

URL: http://nature-kitakyushuichiki.local/photos-konchu-sonota/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型19件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 黒崎城跡　桜 \| アーバンネイチャー北九州 (/photos-kurosaki-jouseki-sakura/ → page-photos_kurosaki_jouseki_sakura.php)

URL: http://nature-kitakyushuichiki.local/photos-kurosaki-jouseki-sakura/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型14件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## ます渕ダム \| アーバンネイチャー北九州 (/photos-masubuchi-dam/ → page-photos_masubuchi_dam.php)

URL: http://nature-kitakyushuichiki.local/photos-masubuchi-dam/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型28件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 門司港　桜 \| アーバンネイチャー北九州 (/photos-mojiko-sakura/ → page-photos_mojiko_sakura.php)

URL: http://nature-kitakyushuichiki.local/photos-mojiko-sakura/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型10件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 門司港 \| アーバンネイチャー北九州 (/photos-mojiko/ → page-photos_mojiko.php)

URL: http://nature-kitakyushuichiki.local/photos-mojiko/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 1/1 一致 / image型10件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 山 \| アーバンネイチャー北九州 (/photos-mountain/ → page-photos_mountain.php)

URL: http://nature-kitakyushuichiki.local/photos-mountain/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 7/7 一致 / image型6件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 29件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 紫川　橋1 \| アーバンネイチャー北九州 (/photos-murasakigawa-hashi1/ → page-photos_murasakigawa_hashi1.php)

URL: http://nature-kitakyushuichiki.local/photos-murasakigawa-hashi1/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型25件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 紫川　橋2 \| アーバンネイチャー北九州 (/photos-murasakigawa-hashi2/ → page-photos_murasakigawa_hashi2.php)

URL: http://nature-kitakyushuichiki.local/photos-murasakigawa-hashi2/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型9件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 長野緑地 \| アーバンネイチャー北九州 (/photos-nagano-ryokuchi/ → page-photos_nagano_ryokuchi.php)

URL: http://nature-kitakyushuichiki.local/photos-nagano-ryokuchi/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型19件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 菜の花 \| アーバンネイチャー北九州 (/photos-nanohana/ → page-photos_nanohana.php)

URL: http://nature-kitakyushuichiki.local/photos-nanohana/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型7件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## ねぎ \| アーバンネイチャー北九州 (/photos-negi/ → page-photos_negi.php)

URL: http://nature-kitakyushuichiki.local/photos-negi/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型13件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 貫山 \| アーバンネイチャー北九州 (/photos-nukisan/ → page-photos_nukisan.php)

URL: http://nature-kitakyushuichiki.local/photos-nukisan/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型3件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## お糸の池 \| アーバンネイチャー北九州 (/photos-oito-no-ike/ → page-photos_oito_no_ike.php)

URL: http://nature-kitakyushuichiki.local/photos-oito-no-ike/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型8件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## フォトコンテスト作品 \| アーバンネイチャー北九州 (/photos-photo-contest/ → page-photos_photo_contest.php)

URL: http://nature-kitakyushuichiki.local/photos-photo-contest/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型21件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## ピーマン \| アーバンネイチャー北九州 (/photos-piman/ → page-photos_piman.php)

URL: http://nature-kitakyushuichiki.local/photos-piman/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型9件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 植物 \| アーバンネイチャー北九州 (/photos-plant/ → page-photos_plant.php)

URL: http://nature-kitakyushuichiki.local/photos-plant/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 16/16 一致 / image型16件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 39件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 植物1 \| アーバンネイチャー北九州 (/photos-plant1/ → page-photos_plant1.php)

URL: http://nature-kitakyushuichiki.local/photos-plant1/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型53件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 植物2 \| アーバンネイチャー北九州 (/photos-plant2/ → page-photos_plant2.php)

URL: http://nature-kitakyushuichiki.local/photos-plant2/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型64件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 植物3 \| アーバンネイチャー北九州 (/photos-plant3/ → page-photos_plant3.php)

URL: http://nature-kitakyushuichiki.local/photos-plant3/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型42件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 植物4 \| アーバンネイチャー北九州 (/photos-plant4/ → page-photos_plant4.php)

URL: http://nature-kitakyushuichiki.local/photos-plant4/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型31件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 植物5 \| アーバンネイチャー北九州 (/photos-plant5/ → page-photos_plant5.php)

URL: http://nature-kitakyushuichiki.local/photos-plant5/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型25件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 写真を投稿する \| アーバンネイチャー北九州 (/photos-policy/ → page-photos_policy.php)

URL: http://nature-kitakyushuichiki.local/photos-policy/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | <span style="color:#c62828">自動NG</span> | 1/7 一致 / 未検出: submitter_section_title, email_note, photo_section_title, upload_text, upload_sub, submit_note |
| フォーム送信 | Contact Form 7 フォームが描画されているか | <span style="color:#c62828">自動NG</span> | wpcf7-form 未検出 |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 22件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反2件）</span> | pa11y-report.json より |

## 農産品 \| アーバンネイチャー北九州 (/photos-produce/ → page-photos_produce.php)

URL: http://nature-kitakyushuichiki.local/photos-produce/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 6/6 一致 / image型6件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 29件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 川 \| アーバンネイチャー北九州 (/photos-river/ → page-photos_river.php)

URL: http://nature-kitakyushuichiki.local/photos-river/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 6/6 一致 / image型6件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 29件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## ロメインレタス \| アーバンネイチャー北九州 (/photos-romaine-lettuce/ → page-photos_romaine_lettuce.php)

URL: http://nature-kitakyushuichiki.local/photos-romaine-lettuce/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型11件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 海・干潟・ビオトープ \| アーバンネイチャー北九州 (/photos-sea/ → page-photos_sea.php)

URL: http://nature-kitakyushuichiki.local/photos-sea/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 11/11 一致 / image型11件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 34件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 志井川　桜 \| アーバンネイチャー北九州 (/photos-shiigawa-sakura/ → page-photos_shiigawa_sakura.php)

URL: http://nature-kitakyushuichiki.local/photos-shiigawa-sakura/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型24件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 白野江植物公園 \| アーバンネイチャー北九州 (/photos-shiranoe-shokubutsu-kouen/ → page-photos_shiranoe_shokubutsu_kouen.php)

URL: http://nature-kitakyushuichiki.local/photos-shiranoe-shokubutsu-kouen/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型6件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 曽根東臨海スポーツ公園 \| アーバンネイチャー北九州 (/photos-sone-higashi-rinkai-sports-kouen/ → page-photos_sone_higashi_rinkai_sports_kouen.php)

URL: http://nature-kitakyushuichiki.local/photos-sone-higashi-rinkai-sports-kouen/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型18件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 曽根干潟1 \| アーバンネイチャー北九州 (/photos-sone-higata1/ → page-photos_sone_higata1.php)

URL: http://nature-kitakyushuichiki.local/photos-sone-higata1/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型59件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 曽根干潟2 \| アーバンネイチャー北九州 (/photos-sone-higata2/ → page-photos_sone_higata2.php)

URL: http://nature-kitakyushuichiki.local/photos-sone-higata2/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型33件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 曽根新田 \| アーバンネイチャー北九州 (/photos-sone-shinden/ → page-photos_sone_shinden.php)

URL: http://nature-kitakyushuichiki.local/photos-sone-shinden/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型12件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## ソラランド平尾台　平尾台自然の郷 \| アーバンネイチャー北九州 (/photos-soraland-hiraodai/ → page-photos_soraland_hiraodai.php)

URL: http://nature-kitakyushuichiki.local/photos-soraland-hiraodai/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型69件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 街と自然 \| アーバンネイチャー北九州 (/photos-urbannature/ → page-photos_urbannature.php)

URL: http://nature-kitakyushuichiki.local/photos-urbannature/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 20/20 一致 / image型20件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 43件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

## 若戸大橋　若戸渡船 \| アーバンネイチャー北九州 (/photos-wakato-oohashi-watashibune/ → page-photos_wakato_oohashi_watashibune.php)

URL: http://nature-kitakyushuichiki.local/photos-wakato-oohashi-watashibune/

| 種別 | 確認内容 | 判定 | 根拠 |
|---|---|---|---|
| 表示確認 | モックアップとの見た目一致（崩れ・文字化け・画像抜けがないか） | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| ACF差し替え | ACFデフォルト値がライブページに反映されているか | 自動OK | 0/0 一致 / image型35件は自動チェック対象外（要目視） |
| リンク遷移 | ページ内リンクの遷移先が生存しているか | 自動OK | 24件確認 |
| レスポンシブ | モバイル表示で文字・画像の重なり／はみ出しがないか | <span style="color:#b8860b">要目視</span> | 未実行（`ichiki diff . <サイトURL> <出力先> --both` を先に実行してください） |
| アクセシビリティ簡易チェック | pa11y-ci（axe-core）によるWCAG 2.0 AA自動検出 | <span style="color:#c62828">自動NG（違反5件）</span> | pa11y-report.json より |

---

## 付録: テンプレート共有により集約されたページ一覧

- 代表: 「北九州ネイチャーポジティブネットワーク」で仲間がどんどん増えています！ | お知らせ | アーバンネイチャー北九州（single-nkk_news.php） — 集約された他8件:
  - 九州電力グループの活動報告 | お知らせ | アーバンネイチャー北九州（/news/20251224-2/）
  - ネイチャーポジティブ実践事例に株式会社マインの事例を掲載しました | お知らせ | アーバンネイチャー北九州（/news/20251224-2/）
  - ネイチャーポジティブ実践事例に株式会社ネイチャーの事例を掲載しました | お知らせ | アーバンネイチャー北九州（/news/20251224-2/）
  - 曽根東小学校主催により、「春の曽根干潟クリーン作戦」が開催されました。北九州ネイチャーポジティブネットワークからも３企業に参加いただきました。 | お知らせ | アーバンネイチャー北九州（/news/20251224-2/）
  - 【国がお墨付き】敷地内の緑地やビオトープが、環境資産に化けるかも！？ （自然共生サイトのご案内） | お知らせ | アーバンネイチャー北九州（/news/20251224-2/）
  - 欧州のNbSジャーナリストが北九州市を訪問 ～世界が注目する北九州市のネイチャーポジティブな取組～ | お知らせ | アーバンネイチャー北九州（/news/20251224-2/）
  - アーバンネイチャー北九州のウェブサイトをリニューアルしました | お知らせ | アーバンネイチャー北九州（/news/20251224-2/）
  - アーバンネイチャー北九州のサイトをリニューアルしました | お知らせ | アーバンネイチャー北九州（/news/20251224-2/）
- 代表: 北九州市響灘ビオトープ | アーバンネイチャー北九州（single-nkk_center.php） — 集約された他9件:
  - 響灘緑地グリーンパーク | アーバンネイチャー北九州（/center/biotope/）
  - 北九州市ほたる館 | アーバンネイチャー北九州（/center/biotope/）
  - いのちのたび博物館 | アーバンネイチャー北九州（/center/biotope/）
  - 到津の森公園 | アーバンネイチャー北九州（/center/biotope/）
  - 香月・黒川ほたる館 | アーバンネイチャー北九州（/center/biotope/）
  - 水環境館 | アーバンネイチャー北九州（/center/biotope/）
  - ソラランド平尾台 | アーバンネイチャー北九州（/center/biotope/）
  - タカミヤ環境ミュージアム | アーバンネイチャー北九州（/center/biotope/）
  - 山田緑地 | アーバンネイチャー北九州（/center/biotope/）
- 代表: 合馬竹林公園 | アーバンネイチャー北九州（single-nkk_spot.php） — 集約された他8件:
  - 響灘ビオトープ | アーバンネイチャー北九州（/about/spots/auma/）
  - 玄海国定公園（若松北海岸） | アーバンネイチャー北九州（/about/spots/auma/）
  - 平尾台 | アーバンネイチャー北九州（/about/spots/auma/）
  - 関門海峡 | アーバンネイチャー北九州（/about/spots/auma/）
  - 紫川 | アーバンネイチャー北九州（/about/spots/auma/）
  - 皿倉山 | アーバンネイチャー北九州（/about/spots/auma/）
  - 曽根干潟 | アーバンネイチャー北九州（/about/spots/auma/）
  - 山田緑地 | アーバンネイチャー北九州（/about/spots/auma/）
- 代表: 九州電力株式会社 北九州支店 | 活動紹介 | アーバンネイチャー北九州（single-nkk_case.php） — 集約された他4件:
  - 株式会社マイン | 活動紹介 | アーバンネイチャー北九州（/network/cases/kyushu-denryoku/）
  - 溝上酒造株式会社 | 活動紹介 | アーバンネイチャー北九州（/network/cases/kyushu-denryoku/）
  - 株式会社ネイチャー | 活動紹介 | アーバンネイチャー北九州（/network/cases/kyushu-denryoku/）
  - 日揮触媒化成株式会社 | 活動紹介 | アーバンネイチャー北九州（/network/cases/kyushu-denryoku/）
- 代表: 8/29(土) 一夜限りの「夜の水族館」開館！ | アーバンネイチャー北九州（single-nkk_event.php） — 集約された他27件:
  - 夏の企画展「世界のカブトムシ・クワガタ展～王者たちの素顔～」 | アーバンネイチャー北九州（/events/sample/）
  - 9/25（金）みずべのゆうぐれコンサート | アーバンネイチャー北九州（/events/sample/）
  - 「響灘の激レア生きもの大捜索」～発見！湿地の水中ヒーローズ～ | アーバンネイチャー北九州（/events/sample/）
  - アロマ祭りプロジェクト2026 ～香りからはじまるネイチャーポジティブ～ | アーバンネイチャー北九州（/events/sample/）
  - 企業向け生態系保全体験プログラム ― ビオトープづくり | アーバンネイチャー北九州（/events/sample/）
  - バードフェスティバル in 北九州 | アーバンネイチャー北九州（/events/sample/）
  - 希少水生植物「ガシャモク」の域外保全～ガシャモクを未来へつなぐために～ | アーバンネイチャー北九州（/events/sample/）
  - 【最新技術が集結】Global Nature Positive Summit「NATURE TECH!」開催 | アーバンネイチャー北九州（/events/sample/）
  - 【熊本開催】一般社団法人うみつなぎ主催 Global Nature Positive Summit 2026 サイドイベント | アーバンネイチャー北九州（/events/sample/）
  - 平尾台 春の自然観察会 〜カルスト台地の野草を楽しむ〜 | アーバンネイチャー北九州（/events/sample/）
  - HIRAODAI ピクニックコンサート | アーバンネイチャー北九州（/events/sample/）
  - 平尾台トゥクトゥクで巡る自然ツアー | アーバンネイチャー北九州（/events/sample/）
  - アーバンネイチャー北九州いきものクエスト（Biome）を実施します！ | アーバンネイチャー北九州（/events/sample/）
  - 【参加企業募集】曽根干潟・朽網川の自然を守る環境保全活動に参加しませんか？ | アーバンネイチャー北九州（/events/sample/）
  - 水環境館400万人達成記念イベント | アーバンネイチャー北九州（/events/sample/）
  - 【参加者募集】公開勉強会「ネイチャーポジティブの地域経済での主流化と展開～九州・沖縄の役割と可能性～」を開催します | アーバンネイチャー北九州（/events/sample/）
  - 自然との共生を企業の力に― ネイチャーポジティブ経営の可能性 | アーバンネイチャー北九州（/events/sample/）
  - 北九州ネイチャーポジティブ経営シンポジウムを開催しました | アーバンネイチャー北九州（/events/sample/）
  - ペルセウス座流星群鑑賞会 | アーバンネイチャー北九州（/events/sample/）
  - 北九州市アーバンネイチャーフォトコンテスト Season2 | アーバンネイチャー北九州（/events/sample/）
  - 北九州市アーバンネイチャーフォトコンテストSeason3 | アーバンネイチャー北九州（/events/sample/）
  - 平尾台シャボン玉フェスティバル | アーバンネイチャー北九州（/events/sample/）
  - 植物標本づくり | アーバンネイチャー北九州（/events/sample/）
  - 曽根干潟クリーンアップ大作戦 2026春 | アーバンネイチャー北九州（/events/sample/）
  - 夏休み自然体験キャンプ ― 2泊3日で学ぶ北九州の自然 | アーバンネイチャー北九州（/events/sample/）
  - 夜間特別開園！「山田ほたる祭り2025」開催！ | アーバンネイチャー北九州（/events/sample/）
  - 子ども自然教室「森の生きもの探検隊」 | アーバンネイチャー北九州（/events/sample/）

## ⚠ 要確認

（該当なし）
