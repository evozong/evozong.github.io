@echo off

IF "%1"=="" (
  bundle exec jekyll serve
) ELSE IF "%1"=="--drafts" (
  bundle exec jekyll serve --drafts
) ELSE (
  ECHO "runlocal.bat [--help|--drafts]"
)
