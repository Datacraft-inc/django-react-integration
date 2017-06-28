from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^post-comment/$', views.post_comment, name='post-comment'),
    url(r'^load-comments/$', views.load_comments, name='load-comments'),
    url(r'^$', views.index, name='index'),
]