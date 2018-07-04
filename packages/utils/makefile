

clean:
	rm -rf dist

install: clean
	rm -rf node_modules
	yarn

serve: clean
	yarn tsc --watch

build: clean
	yarn tsc

test: clean
	yarn jest --c jest.config.js
