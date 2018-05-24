/* tslint:disable:react-this-binding-issue */

import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {injectGlobal} from 'styled-components';

// tslint:disable-next-line:no-implicit-dependencies
import {TitleOnly, Center} from '@presentation/layout.component';
// tslint:disable-next-line:no-implicit-dependencies
import {
  Title,
  Accent,
  Progress,
  SubTitle,
  About
  // tslint:disable-next-line:no-implicit-dependencies
} from '@presentation/common.component';
import {PageWithRouter} from './page';
// @ts-ignore
import ReactSvg from './assets/images/react.svg';
// @ts-ignore
import JsxPng from './assets/images/jsx.png';
// @ts-ignore
import babelSvg from './assets/images/babel.svg';
// @ts-ignore
import typescriptSvg from './assets/images/typescript.svg';
// @ts-ignore
import webpackSvg from './assets/images/webpack.svg';
// @ts-ignore
import trendPng from './assets/images/trend.png';
// @ts-ignore
import reactCreateElementPng from './assets/images/react-create-element.png';
// @ts-ignore
import styledComponentsSvg from './assets/images/styled-components.svg';
// @ts-ignore
import polishedSvg from './assets/images/polished.svg';
// @ts-ignore
import reduxObservableSvg from './assets/images/redux-observable.svg';
// @ts-ignore
import reduxSvg from './assets/images/redux.svg';
// @ts-ignore
import reactRouterDomSvg from './assets/images/react-router-dom.svg';

const root = document.createElement('div');
document.body.appendChild(root);

interface PresentationState {
  currentPosition: number;
}

class Presentation extends React.Component<{}, PresentationState> {
  pageNum = 10;

  constructor(props: {}) {
    super(props);

    this.state = {
      currentPosition: 1
    };
  }

  render() {
    return (
      <HashRouter>
        <Route
          render={({location}) => (
            <>
              <Progress
                aria-valuenow={
                  Number(location.pathname.slice(1)) / this.pageNum
                }
              />
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  classNames="page-transition"
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/1"
                      component={() => (
                        <PageWithRouter pageNum={this.pageNum}>
                          <TitleOnly>
                            <Title>
                              <img src={ReactSvg} style={{width: '3em', position: 'absolute', right: '51%', transform: 'translateX(50%)', top: '6.1em'}} />
                              <Accent>React</Accent>勉強会<sup>@1</sup>
                            </Title>
                          </TitleOnly>
                        </PageWithRouter>
                      )}
                    />
                    <Route
                      exact
                      path="/2"
                      component={() => (
                        <PageWithRouter pageNum={this.pageNum}>
                          <Center>
                            <SubTitle>
                              <Accent>React</Accent>とは
                            </SubTitle>
                            <About>
                              <li>
                                Facebookが作ってる<Accent data-lang="js">
                                  JavaScript
                                </Accent>ライブラリ
                              </li>
                              <li>
                                <Accent data-lang="js">JavaScript</Accent>
                                <span
                                  style={{margin: '0 .5em'}}
                                  className="icon-chevrons-right"
                                />
                                <Accent data-lang="html">HTML</Accent>
                                <br />
                                マークアップより、ロジック重視
                              </li>
                              <li>
                                Virtual DOMで<Accent data-lang="html">
                                  HTML
                                </Accent>を構築<br />
                                <About>
                                  <li>
                                    JSXというほぼ<Accent data-lang="html">
                                      HTML
                                    </Accent>で書ける<br />
                                    <img style={{width: '100%'}} src={JsxPng} />
                                  </li>
                                  <li>
                                    <Accent data-lang="html">HTML</Accent>になる頃には、すべての<Accent data-lang="js">
                                      JavaScript
                                    </Accent>は展開済み
                                  </li>
                                </About>
                              </li>
                            </About>
                          </Center>
                        </PageWithRouter>
                      )}
                    />
                    <Route
                      exact
                      path="/3"
                      component={() => (
                        <PageWithRouter pageNum={this.pageNum}>
                          <Center>
                            <SubTitle>JSXについて補足</SubTitle>
                            <About>
                              <li>
                                実態は、ただの<Accent>React</Accent>のメソッド
                              </li>
                              <li>
                                大抵は、<img
                                  src={babelSvg}
                                  alt="babel"
                                  style={{
                                    width: '94px',
                                    marginBottom: '-15px'
                                  }}
                                />や<img
                                  src={typescriptSvg}
                                  alt="typescript"
                                  style={{
                                    width: '100px',
                                    margin: '0 .4em -5px'
                                  }}
                                />によって、メソッドへ変換して使う<br />
                                <img
                                  style={{width: '100%'}}
                                  src={reactCreateElementPng}
                                />
                              </li>
                              <li>
                                上2つのツールは大抵はES6で書くので、<br/>それらのES5への変換も兼ねて<img
                                  src={webpackSvg}
                                  alt="webpack"
                                  style={{
                                    width: '150px',
                                    margin: '0 .2em -20px'
                                  }}
                                />を使う
                              </li>
                            </About>
                          </Center>
                        </PageWithRouter>
                      )}
                    />
                    <Route
                      exact
                      path="/4"
                      component={() => (
                        <PageWithRouter pageNum={this.pageNum}>
                          <Center>
                            <SubTitle>ESについて補足</SubTitle>
                            <About>
                              <li>
                                <Accent data-lang="js">JavaScript</Accent>の仕様のバージョン<br/>

                                <About>
                                  <li><span className="icon-IE" style={{color: '#0078d7'}}></span>は、ES5とES6のごく一部</li>
                                  <li><span className="icon-chrome" style={{color: '#dd5144'}}></span>は、ES6とES7の一部対応</li>
                                </About>
                              </li>
                              <li>
                                ブラウザによって使える関数やメソッドがバラバラ
                              </li>
                              <li>
                                {
                                  // tslint:disable-next-line:no-http-string
                                  <a href="http://kangax.github.io/compat-table/es2016plus/" target="_blank" rel="noopener noreferrer">http://kangax.github.io/compat-table/es2016plus/</a>
                                }
                                <span className="icon-external-link" style={{marginLeft: '.5em'}}></span>
                              </li>
                            </About>
                          </Center>
                        </PageWithRouter>
                      )}
                    />
                    <Route
                      exact
                      path="/5"
                      component={() => (
                        <PageWithRouter pageNum={this.pageNum}>
                          <Center>
                            <SubTitle>
                              一番ダウンロードされてる
                            </SubTitle>
                            <small>http://www.npmtrends.com/react-vs-preact-vs-vue-vs-hyperapp-vs-@angular/core-vs-angular-vs-riot</small>
                            <img src={trendPng} alt="trand" style={{background: '#fff', width: 'calc(100% + 20em)', marginLeft: '-10em'}} />
                          </Center>
                        </PageWithRouter>
                      )}
                    />
                    <Route
                      exact
                      path="/6"
                      component={() => (
                        <PageWithRouter pageNum={this.pageNum}>
                          <Center>
                            <SubTitle>
                              <Accent>React</Accent>を書いてみる
                            </SubTitle>
                            <About>
                              <li>実はオンライン上でReactが書ける便利なサイトがめちゃくちゃある</li><br/>

                              <About>
                                <li><a href="https://codesandbox.io/s/new" target="_blank" rel="noopener noreferrer">CodeSandbox</a><span className="icon-external-link" style={{marginLeft: '.5em'}}></span></li>
                                <li><a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">CodePen</a><span className="icon-external-link" style={{marginLeft: '.5em'}}></span></li>
                                <li><a href="https://jsfiddle.net/" target="_blank" rel="noopener noreferrer">JSFiddle</a><span className="icon-external-link" style={{marginLeft: '.5em'}}></span></li>
                                <li><a href="https://jsbin.com/?html,css,js,output" target="_blank" rel="noopener noreferrer">JSBin</a><span className="icon-external-link" style={{marginLeft: '.5em'}}></span></li>
                                <li>etc...</li>
                              </About>
                            </About>
                          </Center>
                        </PageWithRouter>
                      )}
                    />
                    <Route
                      exact
                      path="/7"
                      component={() => (
                        <PageWithRouter pageNum={this.pageNum}>
                          <Center>
                            <SubTitle>
                              <Accent>React</Accent>でカウンターアプリ on CodeSandbox
                            </SubTitle>
                            <iframe src="https://codesandbox.io/embed/n44wq18y44?fontsize=18"
                              style={{
                                width: '100%',
                                height: '600px',
                                border: '0',
                                borderRadius: '4px',
                                overflow: 'hidden',
                              }}
                              // tslint:disable-next-line:react-iframe-missing-sandbox
                              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                            />
                          </Center>
                        </PageWithRouter>
                      )}
                    />
                    <Route
                      exact
                      path="/8"
                      component={() => (
                        <PageWithRouter pageNum={this.pageNum}>
                          <Center>
                            <SubTitle>
                              <Accent>React</Accent>の開発のサイクルを簡単に
                            </SubTitle>
                            <About>
                              <li>
                                <code>props</code>や<code>state</code>を見て、マークアップを記述
                              </li>
                              <li>
                                <code>props</code>や<code>state</code>に更新が入ると再レンダリングされるので、<br/>
                                再レンダリング時の<code>props</code>や<code>state</code>を見て、マークアップを記述
                              </li>
                              <li>
                                実際には、色んな<a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" rel="noopener noreferrer">ライフサイクルメソッド</a><span className="icon-external-link" style={{margin: '0 .5em'}}></span>というものがある<br/>

                                <About>
                                  <li>
                                    <code>componentDidMount</code>は、レンダリングされた時に一度だけ実行される<br/>
                                    <span className="icon-chevrons-right" style={{marginLeft: '2em'}}></span>よくあるのは、APIで取得して<code>state</code>に入れたり
                                  </li>
                                </About>
                              </li>
                            </About>
                          </Center>
                        </PageWithRouter>
                      )}
                    />
                    <Route
                      exact
                      path="/9"
                      component={() => (
                        <PageWithRouter pageNum={this.pageNum}>
                          <Center>
                            <SubTitle>
                              最後に
                            </SubTitle>
                            <About>
                              <li>
                                <Accent>React</Accent>自体はそんなに複雑じゃない
                              </li>
                              <li style={{position: 'relative'}}>
                                興味持った方は、これらも覚えることをおすすめします <br/>

                                <About>
                                  <li><a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">StyledComponents</a><span className="icon-external-link" style={{marginLeft: '.5em'}}></span></li>
                                  <li><a href="https://polished.js.org/" target="_blank" rel="noopener noreferrer">Polished</a><span className="icon-external-link" style={{marginLeft: '.5em'}}></span></li>
                                  <li><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a><span className="icon-external-link" style={{marginLeft: '.5em'}}></span></li>
                                  <li><a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">React Router Dom</a><span className="icon-external-link" style={{marginLeft: '.5em'}}></span></li>
                                  <li><a href="https://rxjs-dev.firebaseapp.com/api/" target="_blank" rel="noopener noreferrer">RxJS</a><span className="icon-external-link" style={{marginLeft: '.5em'}}></span></li>
                                  <li>あと、TypeScript</li>
                                </About>

                                <img src={styledComponentsSvg} style={{width: '100px', position: 'absolute', right: '400px', top: '70px', background: '#fff'}} />
                                <img src={polishedSvg} style={{width: '100px', position: 'absolute', right: '440px', top: '185px', background: '#fff'}} />
                                <img src={reduxSvg} style={{width: '100px', position: 'absolute', right: '270px', top: '100px'}} />
                                <img src={reactRouterDomSvg} style={{width: '100px', position: 'absolute', right: '270px', top: '250px'}} />
                                <img src={reduxObservableSvg} style={{width: '100px', position: 'absolute', right: '390px', top: '300px'}} />
                              </li>
                            </About>
                          </Center>
                        </PageWithRouter>
                      )}
                    />
                    <Route
                      exact
                      path="/10"
                      component={() => (
                        <PageWithRouter pageNum={this.pageNum}>
                          <TitleOnly>
                            <Title>
                              ちなみに、このプレゼンも<Accent>React</Accent>製です
                            </Title>
                          </TitleOnly>
                        </PageWithRouter>
                      )}
                    />
                    <Redirect to="/1" />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </>
          )}
        />
      </HashRouter>
    );
  }
}

render(<Presentation />, root);

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    min-height: 100vh;
    min-width: 100vw;
    background: #292c34;
  }

  .page-transition-enter {
    opacity: 0;
  }

  .page-transition-enter-active {
    opacity: 1;
    transition: .3s;
  }

  .page-transition-exit {
    opacity: 1;
  }

  .page-transition-exit-active {
    opacity: 0;
    /* transition: .3s; */
  }
`;
