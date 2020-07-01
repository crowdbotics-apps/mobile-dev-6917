from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import GHjhgViewSet, HGFJHfViewSet, JHGHFjgViewSet

router = DefaultRouter()
router.register("ghjhg", GHjhgViewSet)
router.register("hgfjhf", HGFJHfViewSet)
router.register("jhghfjg", JHGHFjgViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
