from rest_framework import serializers
from users.models import GHjhg, HGFJHf, JHGHFjg


class GHjhgSerializer(serializers.ModelSerializer):
    class Meta:
        model = GHjhg
        fields = "__all__"


class HGFJHfSerializer(serializers.ModelSerializer):
    class Meta:
        model = HGFJHf
        fields = "__all__"


class JHGHFjgSerializer(serializers.ModelSerializer):
    class Meta:
        model = JHGHFjg
        fields = "__all__"
