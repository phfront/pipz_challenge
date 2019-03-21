import React, { Component } from 'react';

import './styles.scss';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';

export default class Animes extends Component {
  state = {
    filter_text: '',
    filtered_animes: [],
    animes: [
      {
              canonicalTitle: 'anime 1',
              averageRating: '5',
              startDate: '2019-01-01',
              endDate: '2019-02-02',
              status: 'in-progress',
              posterImage: 'https://via.placeholder.com/50'
      },
      {
              canonicalTitle: 'anime 2',
              averageRating: '5',
              startDate: '2019-01-01',
              endDate: '2019-02-02',
              status: 'in-progress',
              posterImage: 'https://via.placeholder.com/50'
      },
      {
              canonicalTitle: 'anime 3',
              averageRating: '5',
              startDate: '2019-01-01',
              endDate: '2019-02-02',
              status: 'in-progress',
              posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 4',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 2',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 3',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 4',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 2',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 3',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 4',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 2',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 3',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 4',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 2',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 3',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 4',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 2',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 3',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      },
      {
        canonicalTitle: 'anime 4',
        averageRating: '5',
        startDate: '2019-01-01',
        endDate: '2019-02-02',
        status: 'in-progress',
        posterImage: 'https://via.placeholder.com/50'
      }
    ]
  }

  componentWillMount() {
    const { animes } = this.state;
    this.state.filtered_animes = animes;
  }

  filter = event => {
    const text = event.target.value;
    this.setState({
      filter_text: text
    });
    const filtered_animes = this.state.animes.filter(anime => {
      if (anime.canonicalTitle.toLowerCase().indexOf(text.toLowerCase()) > -1) {
        return anime
      }
    });
    this.setState({ filtered_animes })
  }

  render() {
    const { filtered_animes } = this.state;
    return (
      <div>
        <Card className="title-card">
          <Typography variant="h4">
            Animes list
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="filter-input"
              label="Filter"
              className="filter-input"
              onChange={this.filter}
              margin="normal"
            />
          </form>
        </Card>
        <div className="animes">
          {filtered_animes.map((anime, index) => (
            <Card key={index} className="anime">
              <CardHeader
                title={anime.canonicalTitle}
              />
              <CardMedia
                className="anime-poster-image"
                image={anime.posterImage}
              />
              <CardContent>
                <Typography variant="h5">
                  {anime.averageRating}
                </Typography>
                <Typography component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions className="actions">
                <Link className="link-details" to={`/anime/${index}`}>
                  <Button variant="outlined" color="secondary" size="small">
                    Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    )
  }
}