---
comment: false
---

# 📚 Editor Guide (Beta)

This document details the editing requirements and standards for the BNBU Handbook, for the reference of all participating editors.

## Prerequisites

You need to have a GitHub account.

If editing using the web version, you can click edit directly on the webpage and submit a PR with one click.

If editing locally, you need to have knowledge of Git. First, fork the repository, then clone it to your local machine, edit it, commit it to your own branch, and then submit a PR.

## Submission Method

In general, all submissions should be merged into the `dev` branch via Pull Request. Before submitting, please ensure your local repository is up to date to avoid unnecessary merge conflicts. If conflicts arise, please communicate with the relevant editors in the respective chat software.

## Reference Format

In general, references are not required, but if you used information from certain sources during the editing process, it is recommended to add them to the References section at the end of the document so that other readers can verify and further understand the relevant information.

References are generally placed at the end of each Markdown file in the following format:

This format combines APA format with Wikipedia's reference format, suitable for two common types of sources: web pages and books. Please choose the appropriate format based on the type of source you are using.

**Web Page**

```Markdown
(Main text)
Our university was established in 2005[^1], located in...

(End of page)
## References

[^1]: **Author/Organization Name** (Year of publication or specific date). *Article/Page Title*. Website or Platform Name. Retrieved from: [Original Link](http://example.com) (Web Archive: [Internet Archive](http://example.com), accessed on Date you accessed/archived).

(Example)
[^2]: **Song Xuemei** (2020-3-26). *UIC and Community Sports Park continue to expand industry-academia-research cooperation fields*. Pearl River Evening News. Retrieved from: [Original Link](https://www.bnbu.edu.cn/info/1078/8891.htm) (Web Archive: [Internet Archive](https://web.archive.org/web/20260419035308/https://www.bnbu.edu.cn/info/1078/8891.htm), accessed on 2026-04-19).
```

Rendered effect:  
Our university was established in 2005[^1], located in...  
[^1]: **Song Xuemei** (2020-3-26). *UIC and Community Sports Park continue to expand industry-academia-research cooperation fields*. Pearl River Evening News. Retrieved from: [Original Link](https://www.bnbu.edu.cn/info/1078/8891.htm) (Web Archive: [Internet Archive](https://web.archive.org/web/20260419035308/https://www.bnbu.edu.cn/info/1078/8891.htm), accessed on 2026-04-19).

**Book**

```Markdown
(Main text)
Our university was established in 2005[^3], located in...

(End of page)
## References

[^3]: **[Author Name]** ([Publication Year]). *[Book Title]* ([Edition/Translator Info, omit if none]). [Publisher Name]. ISBN: [ISBN Number].

(Example)
[^4]: **Tang Tao** (2023). *UIC and Liberal Arts Education*. Guangdong People's Publishing House. ISBN: 9787218164571.
```

Rendered effect  
Our university was established in 2005[^2], located in...  
[^2]: **Tang Tao** (2023). *UIC and Liberal Arts Education*. Guangdong People's Publishing House. ISBN: 9787218164571.
