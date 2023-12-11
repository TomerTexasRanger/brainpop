import {Activity, ScoreZoom, Zoom} from "@/resources/models";
import {ACTIVITY_TYPES} from "@/resources/const";

export class ActivityFormattingService {
  data = [];
  formattedData = [];
  sortedByMonths = [];

  constructor(data) {
    this.data = data;
  }

  get getData() {
    return this.data;
  }

  get getFormattedData() {
    return this.formattedData
  }

  get getSorted() {
    return this.sortedByMonths;
  }

  sortByDate() {
    this.data = this.data.sort((a, b) => b.d_created - a.d_created);
    return this;
  }

  sliceArr({pageSize, currentPage}) {
    this.data = this.data.slice(0, pageSize * currentPage);
    return this;
  }

  groupByMonths() {
    this.sortedByMonths = this.data.reduce((acc, activity) => {
      const monthYear = activity.createdDate.toLocaleString('en', {month: 'long', year: 'numeric'});

      if (!acc[monthYear]) acc[monthYear] = [];
      acc[monthYear].push(activity);
      return acc;
    }, {});
    return this;
  };

  parseData() {
    if (this.data[0].activities) {
      this.data = this.data.map(({resource_type, activities}) => {
        return activities.map(activity => {
          return {
            ...activity,
            resource_type
          }
        })
      }).flat();
    }
    return this;
  }

  mapGroups() {
    this.sortedByMonths = Object.keys(this.sortedByMonths).map(monthYear => ({
      month: monthYear,
      activities: this.sortedByMonths[monthYear]
    }));
    return this;
  }

  createResource() {
    this.formattedData = this.data.map(activity => {
      if (ACTIVITY_TYPES.zoomAndScore.includes(activity.resource_type)) return new ScoreZoom(activity)
      else if (ACTIVITY_TYPES.zoom.includes(activity.resource_type)) return new Zoom(activity)
      else return new Activity(activity)
    })
    return this;
  }


}
