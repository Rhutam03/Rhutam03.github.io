# Rhutam Mahajan

My personal website at [rhutammahajan.com](https://rhutammahajan.com), built with React and Vite and published through GitHub Pages on a custom domain.

I am an M.S. Data Science student at the University of Maryland, College Park, graduating in May 2027. My work includes SQL analysis, business intelligence, data pipelines, and machine learning projects.

## Repository structure

- The root HTML, assets, documents, and CNAME are the published GitHub Pages files.
- `site-source/` contains the editable React/Vite project and pinned dependencies.
- `site-source/src/data.js` contains project, experience, skill, and education content.
- `site-source/public/` contains the portrait, icons, social preview, and PDF downloads.
- `scripts/sync_build.py` copies a checked build to the published root.

## Run locally

From `site-source/`, run `npm ci` and then `npm run dev`.

## Build and publish

1. From `site-source/`, run `npm ci` followed by `npm run build`.
2. Run `npm run preview` to inspect the production build, including all four document cards.
3. From the repository root, run `python3 scripts/sync_build.py`.
4. Review the changes and push the intended commit to the branch configured for GitHub Pages.

The custom domain is served at the root, so Vite uses `base: '/'`. Keep the CNAME file. This workflow preserves the existing GitHub Pages hosting setup.

## Documents

- `Rhutam_Mahajan_Data_Science_Resume.pdf`: one-page resume emphasizing modeling, evaluation, and analysis.
- `Rhutam_Mahajan_Data_Engineering_Resume.pdf`: one-page resume emphasizing SQL, Spark, data validation, and workflows.
- `Rhutam_Mahajan_AI_ML_Engineering_Resume.pdf`: one-page resume emphasizing retrieval, agent workflows, PyTorch, and model-serving applications.
- `academic_cv.pdf`: two-page academic CV for research opportunities.
- `Rhutam_Mahajan_one_page_resume.pdf` and `Rhutam-resume.pdf`: compatibility copies of the Data Science resume for earlier links.

When replacing a PDF, update the copy under `site-source/public/`, rebuild, and sync the build. Keep the content consistent with the linked project code and the evaluation scope.

Contact: [rhutammahajan@gmail.com](mailto:rhutammahajan@gmail.com).
