import {HttpActivitiesService} from "@/services/http/httpActivitiesService";
import store from '@/store/index'

export const fetchActivities = async ({name, matched}, from, next) => {
    if (matched.some(record => record.name === 'view')) return  next()
    new HttpActivitiesService().index(name).then(data => {
        store.dispatch("processActivities", data);
        next();
    }).catch(error => {
        // Handle error, redirect, or cancel navigation
        next(false);
    });
}

export const setModalData = ({params}, from, next) => {
    store.commit('setSelectedActivity', params.id)
    if(store.state.selectedActivity){
    store.commit('setShowView', true)
    next()
    }else{
        next(false);
    }
}
