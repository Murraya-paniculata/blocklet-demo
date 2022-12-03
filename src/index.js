import dav from 'dva';
import createLoading from 'dva-loading';
import App from './App';
import searchResultModel from './models/block-data';

const app = dav();

app.use(createLoading());

app.model(searchResultModel);

app.router(App);

app.start('#root');
