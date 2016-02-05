import alt from '../alt';
import {assign} from 'underscore';

class SearchActions {
  constructor() {
    this.generateActions(
      'findVideoSuccess',
      'findVideoFail'
    );
  }

  findVideo(payload) {
    $.ajax({
      url: '/api/findVideo',
      type: 'GET',
      data: { name: payload}
    })
      .done((data) => {
        //assign(payload, data);
        this.actions.findVideoSuccess(data);
      })
      .fail(() => {
        this.actions.findVideoFail(payload);
      });
  }
}

export default alt.createActions(SearchActions);
