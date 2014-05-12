 docker run -p 8000:8000 -v `pwd`/app:/app/app -v `pwd`/test/e2e:/app/test/e2e -v `pwd`/test/unit:/app/test/unit -ti github-comparator bash
