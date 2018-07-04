
getdir = echo $(1) | sed 's/[^\.]*\.//'

build: 
	@make build.utils

test:
	@make test.utils


build.%:
	@echo "make build.`$(call getdir,$@)`"
	@cd "packages/`$(call getdir,$@)`"  && make build

test.%:
	@echo "make test.`$(call getdir,$@)`"
	@cd "packages/`$(call getdir,$@)`"  && make test
