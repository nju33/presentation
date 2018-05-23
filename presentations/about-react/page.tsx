import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import keymaster from 'keymaster';

interface PageProps {
  pageNum: number;
}

class Page extends React.Component<
  PageProps & Partial<RouteComponentProps<{}>>
> {
  render() {
    return this.props.children;
  }

  get currentPositionNumber(): number {
    if (this.props.location === undefined) {
      throw new Error();
    }

    return Number(this.props.location.pathname.slice(1));
  }

  prevPage = () => {
    if (this.currentPositionNumber < 2) {
      return;
    }

    setTimeout(() => {
      if (this.props.history === undefined) {
        return;
      }
      this.props.history.push(`/${this.currentPositionNumber - 1}`);
    }, 0);
  };

  nextPage = () => {
    if (this.props.pageNum <= this.currentPositionNumber) {
      return;
    }

    setTimeout(() => {
      if (this.props.history === undefined) {
        return;
      }
      this.props.history.push(`/${this.currentPositionNumber + 1}`);
    }, 0);
  };

  componentDidMount() {
    setTimeout(() => {
      keymaster('k', this.prevPage);
      keymaster('j', this.nextPage);
    }, 350);
  }

  componentWillUnmount() {
    keymaster.unbind('k');
    keymaster.unbind('j');
  }
}

// tslint:disable-next-line:variable-name
export const PageWithRouter = withRouter(Page as React.ComponentClass<
  PageProps & RouteComponentProps<{}>
>);
